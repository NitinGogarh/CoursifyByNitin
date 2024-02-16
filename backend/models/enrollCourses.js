const mongoose = require("mongoose");
const enrollSchema = mongoose.Schema(
  {
    email:String,
    courses:Array,
  },
  { timestamps: true }
);



const enrollModel = mongoose.model("enrollModel", enrollSchema);
module.exports = enrollModel;