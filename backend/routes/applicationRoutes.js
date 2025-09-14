
let express=require("express");
let router=express.Router();

let submitApplication = require("../controllers/applicationController");
let upload = require("../Middleware/uploadMiddleware");

router.post(
  "/submit",
  upload.fields([
    { name: "passportPhoto", maxCount: 1 },
    { name: "resume", maxCount: 1 }
  ]),
  submitApplication
);

module.exports = router; 
