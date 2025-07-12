const express = require('express');
const router = express.Router();

const employeeController = require('../controller/employee.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Route to add a new employee

router.post("/api/employee", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.createEmployee);


// Route to get all employees
router.get(
  "/api/employees",
  [authMiddleware.verifyToken, authMiddleware.isAdmin],
  employeeController.getAllEmployees
);
module.exports = router;