const mongoose = require("mongoose");
require("mongoose-type-email");
mongoose.SchemaTypes.Email.defaults.message = "Email address is invalid";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: { type: mongoose.SchemaTypes.Email, required: true },
    password: { type: String },
    isAdmin: { type: Boolean, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
