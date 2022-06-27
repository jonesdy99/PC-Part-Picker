import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = new Schema({
  budget: Number,
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  budget: [budgetSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
