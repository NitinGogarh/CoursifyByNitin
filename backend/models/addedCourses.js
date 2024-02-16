const mongoose = require("mongoose");
const coursesSchema = mongoose.Schema(
  {
    email:String,
    courses:Array
  },
  { timestamps: true }
);



const coursesModel = mongoose.model("coursesModel", coursesSchema);
module.exports = coursesModel;
