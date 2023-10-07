const users = require("../controllers/user.controller.js");
const validate = require("../modules/Auth.js").isAuthenticated;

var router = require("express").Router();

router.post("/login", users.Login);

router.post("/", validate, users.create);

router.get("/:uid", validate, users.findOne);

module.exports = router;
