import mongoose from "mongoose";

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
}, {
  timestamps: true
})

const partSchema = new Schema({
  title: {type: String, required: true},
  case: String,
  graphic: String,
  motherbo: String,
  storage: String,
  psu: String,
  ram: String,
  reviews: [reviewSchema],
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})


const Part = mongoose.model('Part', partSchema)

export{
  Part
}