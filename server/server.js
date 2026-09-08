import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'KisanKarya API is running' })
})

await connectDB()

app.listen(PORT, () => {
  console.log(`KisanKarya API running on http://localhost:${PORT}`)
})
