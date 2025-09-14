const Project = require("../models/projectModel");

// Save form submission
const submitProject = async (req, res) => {
    console.log("Request Body:", req.body); // Debugging line
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const project = new Project({ name, email, message });
    await project.save();

    res.status(201).json({
      message: "Project submitted successfully!",
      data: project
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all submissions (for admin)
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { submitProject, getProjects };
