const employeeService = require("../services/employee.service");

async function createEmployee(req, res, next) {
  // console.log(req.headers);

  // Check if employee email already exists in the database
  const employeeExists = await employeeService.checkIfEmployeeExists(
    req.body.employee_email
  );
  // If employee exists, send a response to the client
  if (employeeExists) {
    res.status(400).json({
      error: "This email address is already associated with another employee!",
    });
  } else {
    try {
      const employeeData = req.body;
      // Create the employee
      const employee = await employeeService.createEmployee(employeeData);
      if (!employee || employee.affectedRows !== 1) {
        res.status(400).json({
          error: "Failed to add the employee!",
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(err);
      res.status(400).json({
        error: "Something went wrong!",
      });
    }
  }
}

async function getAllEmployees(req, res, next) {
  const employees = await employeeService.getAllEmployees();
  // console.log(employees);
  if (!employees) {
    res.status(400).json({
      error: "Failed to fetch all employees!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: employees,
    });
  }
}

module.exports = {
  createEmployee,
  getAllEmployees
};
