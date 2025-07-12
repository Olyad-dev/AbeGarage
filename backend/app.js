const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const sanitize = require('sanitize');

const port = process.env.PORT;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
};

const router = require("./routes/index");

const app = express();
app.use(express.json());

app.use(cors(corsOptions));
app.use(router);
    

// Middleware to sanitize input
app.use(sanitize.middleware)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;