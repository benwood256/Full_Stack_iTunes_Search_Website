// validating the jwt to authorise requests from the frontend
const jwt = require("jsonwebtoken"); 

async function authenticateToken(req, res, next) {
    // Get the Authorization header from the request
    const authHeader = req.headers.authorization;

    // Reject the request if no token was provided
    if (!authHeader) {
        return res.status(401).json({
            error: "No valid token provided"
        });
    }

    // Extract the JWT from "Bearer <token>"
    const token = authHeader.split(" ")[1];

    try {
        // Verify the JWT and retrieve its payload
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store the decoded JWT in the request
        req.tokenData = decoded;

        // Continue to the next middleware/controller
        next();

    } catch (error) {
	console.log("JWT Error:", error.message); // bug fix: hadn't included next as an argument of the function

        // Reject the request if the JWT is invalid
        return res.status(401).json({
            error: "Invalid token"
        });
    }
};

module.exports = authenticateToken;
