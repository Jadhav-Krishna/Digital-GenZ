const express = require("express");
const router = express.Router();
const { submitProject, getProjects } = require("../controllers/projectController");

// Submit form
router.post("/new", submitProject);

// Admin: view all submissions
router.get("/", getProjects);

module.exports = router;
