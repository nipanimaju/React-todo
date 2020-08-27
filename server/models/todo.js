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
  comment: {
      type: String,
  }
});

module.exports = mongoose.model("Todo", Todoschema);