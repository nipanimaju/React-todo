const mongoose = require("mongoose");
const { Schema } = mongoose;

const Todoschema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  priority: {
    type: String
  },
  comment: {
      type: String,
  },
  time: { 
    type : Date, 
    default: Date.now
  },
  endTime: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Todo", Todoschema);