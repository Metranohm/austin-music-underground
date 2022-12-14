import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  admin: {type: Boolean, default: false},
  venues: [{ type: Schema.Types.ObjectId, ref: "Venue" }]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
