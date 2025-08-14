const express = require("express");
const router = express.Router();

const employeeController = require("../controller/employee.controller");
const authMiddleware = require("../middleware/auth.middleware");
const employeeService = require("../services/employee.service"); // Import the employee service

// Route to add a new employee
router.post(
  "/api/employee",
  [authMiddleware.verifyToken, authMiddleware.isAdmin],
  employeeController.createEmployee
);

// Route to get all employees
router.get(
  "/api/employees",
  [authMiddleware.verifyToken, authMiddleware.isAdmin],
  async (req, res) => {
    // Use the getAllEmployees function from the service
    try {
      const employees = await employeeService.getAllEmployees();
      res.json(employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ error: "Failed to fetch employees" });
    }
  }
);

module.exports = router;
