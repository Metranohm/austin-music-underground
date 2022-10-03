import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: { type: Number, min: 1, max: 10, default: 10}
}, {
  timestamps: true
})

const venueSchema = new Schema({
  title: String,
  address: String,
  website: String,
  details: String,
  imageURL: String,
  reviews: [reviewSchema]
}, {
  timestamps: true
})

const Venue = mongoose.model('Venue', venueSchema)

export {
  Venue
}