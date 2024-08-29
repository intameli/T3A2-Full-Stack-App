const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tutorSchema = new Schema(
  {
    // firstName: {
    //   type: String,
    //   required: true,
    // },
    // lastName: {
    //   type: String,
    //   required: true,
    // },
    // emailWork:{
    //     type: mongoose.SchemaTypes.Email,
    //     required: false
    // },
    // emailHome:{
    //     type: mongoose.SchemaTypes.Email,
    //     required: true
    // },
    // homeNr: {
    //   type: String,
    //   match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    //   required: false,
    // },
    // mobileNr: {
    //   type: String,
    //   match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    //   required: false,
    // },

    name: {
      type: String,
      required: true,
    },
    subjects: {
      type: [String],
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    pdf: {
      type: String,
    },
    pdfMetaData: {
      type: Object,
    },
    about: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tutor", tutorSchema);
