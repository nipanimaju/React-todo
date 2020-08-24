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
      type: String,
      enum: ["low", "medium", "high"]
  }
});

module.exports = mongoose.model("Todo", Todoschema);