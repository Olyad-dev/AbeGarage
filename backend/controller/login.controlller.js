const loginService = require("../services/login.service");   
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;


async function logIn(req, res, next) {
    try {
        const employeeData = req.body;
        const employee = await loginService.logIn(employeeData);
        if (employee.status === "fail") {
            return res.status(401).json({
                status: "fail",
                message: employee.message
            });
        }

        // Generate JWT token
        const payload = {
          employee_role: employee.data.company_role_id,
          employee_first_name: employee.data.employee_first_name,
          employee_email: employee.data.employee_email, 
        };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: '1w' });
        // Send response with token
        const sendBack = {
            employee_token: token,
        }
        res.status(200).json({
          status: "success",
          message: "Employee logged in successfully",
          data: sendBack,
        });
    } catch (error) {
        
    }
}

module.exports = {
    logIn
};