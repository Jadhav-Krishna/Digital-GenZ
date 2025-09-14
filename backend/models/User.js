const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    contactNo: { type: String, required: true },
    whatsappNo: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    qualification: { type: String, required: true },
    passportPhoto: { type: String, required: true }, // file path
    resume: { type: String, required: true }         // file path
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
