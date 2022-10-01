import mongoose from 'mongoose'

const Schema = mongoose.Schema

const venueSchema = new Schema({
  title: String,
  imageURL: String,
  // reviews: { type: Schema.Types.ObjectId, ref: "Reviews" }
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  venues: [venueSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
