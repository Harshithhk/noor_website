const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: [true, "Please add a label"],
    maxlength: [20, "Label cannot be more than characters"],
  },
  label: {
    type: String,
    required: [true, "Please add a title"],
  },
  shortDescription: {
    type: String,
    required: [true, "Please add a description"],
  },
  mainDescription: {
    type: String,
    required: [true, "Please add a description"],
  },
  dateTime: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
    default: 0,
  },
  coverImageUrl: {
    type: String,
    required: [true, "Please add a description"],
  },
  eventImages: {
    type: [String],
    require: false,
  },
  cardColor: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.models.Event || mongoose.model("Event", EventSchema)
