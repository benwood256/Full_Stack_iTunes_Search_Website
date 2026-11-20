require("dotenv").config();

const jwt = require("jsonwebtoken");

const token = jwt.sign(
    { access: "itunes-api" },
    process.env.JWT_SECRET
);

console.log(token);
