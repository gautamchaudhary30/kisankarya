import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    mobile: { type: String, required: true, unique: true, index: true },
    role: { type: String, enum: ['user', 'engineer'], required: true },
    isVerified: { type: Boolean, default: true },
  },
  { timestamps: true },
)

export default mongoose.model('User', userSchema)
