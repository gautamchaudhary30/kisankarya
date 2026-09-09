import { Router } from 'express'
import User from '../models/User.js'

const router = Router()
const otpStore = new Map()

function cleanMobile(value) {
  return String(value || '').replace(/\D/g, '')
}

router.post('/send-otp', (req, res) => {
  const mobile = cleanMobile(req.body.mobile)
  const role = req.body.role

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return res.status(400).json({ ok: false, message: 'Enter a valid 10-digit Indian mobile number.' })
  }

  if (!['user', 'engineer'].includes(role)) {
    return res.status(400).json({ ok: false, message: 'Invalid login role.' })
  }

  const otp = String(Math.floor(100000 + Math.random() * 900000))
  otpStore.set(`${mobile}:${role}`, { otp, expiresAt: Date.now() + 5 * 60 * 1000 })

  res.json({
    ok: true,
    message: 'OTP generated successfully.',
    ...(process.env.NODE_ENV !== 'production' ? { devOtp: otp } : {}),
  })
})

router.post('/verify-otp', async (req, res) => {
  const mobile = cleanMobile(req.body.mobile)
  const role = req.body.role
  const otp = String(req.body.otp || '')
  const key = `${mobile}:${role}`
  const saved = otpStore.get(key)

  if (!saved || saved.expiresAt < Date.now() || saved.otp !== otp) {
    return res.status(401).json({ ok: false, message: 'Invalid or expired OTP.' })
  }

  otpStore.delete(key)

  const user = await User.findOneAndUpdate(
    { mobile },
    { $set: { role, isVerified: true } },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  )

  res.json({
    ok: true,
    message: 'Login successful.',
    user: { id: user._id, mobile: user.mobile, role: user.role },
  })
})

export default router
