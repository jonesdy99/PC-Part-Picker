import mongoose from "mongoose";

const Schema = mongoose.Schema

const partSchema = new Schema({
  title: String,
  case: String,
  graphic: String,
  motherbo: String,
  storage: String,
  psu: String,
  ram: String,
})