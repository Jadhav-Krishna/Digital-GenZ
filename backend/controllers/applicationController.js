const Application = require("../models/User");

const submitApplication = async (req, res) => {
  try {
    const { studentName, contactNo, whatsappNo, email, qualification } = req.body;

    if (!req.files.passportPhoto || !req.files.resume) {
      return res.status(400).json({ message: "Files are required" });
    }

    const newApplication = new Application({
      studentName,
      contactNo,
      whatsappNo,
      email,
      qualification,
      passportPhoto: req.files.passportPhoto[0].path,
      resume: req.files.resume[0].path
    });

    await newApplication.save();
    res.status(201).json({
      message: "Application submitted successfully!",
      data: newApplication
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = submitApplication;
