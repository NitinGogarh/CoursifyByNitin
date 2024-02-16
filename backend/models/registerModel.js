const mongoose = require("mongoose");
const { randomBytes, createHmac } = require("crypto");
const registerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

registerSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  salt = randomBytes(16).toString();
  const hashPassword = createHmac("sha256", salt)
    .update(this.password)
    .digest("hex");
  this.password = hashPassword;
  this.salt = salt;
  next();
});

const registerModel = mongoose.model("registerModel", registerSchema);
module.exports = registerModel;
