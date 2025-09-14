const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

module.exports = Project;
