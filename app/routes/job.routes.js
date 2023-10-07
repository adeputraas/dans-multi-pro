const jobs = require("../controllers/job.controller.js");
const validate = require("../modules/Auth.js").isAuthenticated;
var router = require("express").Router();

// Retrieve all Tutorials
router.post("/retrieveAllList", validate, jobs.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", validate, jobs.findOne);

module.exports = router;