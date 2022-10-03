import mongoose from 'mongoose'

const Schema = mongoose.Schema

const venueSchema = new Schema({
  title: String,
  address: String,
  website: String,
  details: String,
  imageURL: String,
  reviews: { type: Schema.Types.ObjectId, ref: "Reviews" }
}, {
  timestamps: true
})

const Venue = mongoose.model('Venue', venueSchema)

export {
  Venue
}