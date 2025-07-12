const express = require("express");
const router = express.Router();

const loginControllers = require("../controller/login.controlller");

router.post("/api/employee/login", loginControllers.logIn);

module.exports = router;
