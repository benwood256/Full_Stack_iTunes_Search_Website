
// allows me to use express & access its functions
const express = require('express');
const app = express();

// allows me to use cors & ensure there's no issue in sending & receiving HTTP requests between backend & frontend
const cors = require("cors");
app.use(cors());

// retrieve environment variables from the .env file
const dotenv = require("dotenv");
dotenv.config();

// retrieve the 'route' that handles the incoming HTTP request
const searchRoutes = require("./routes/searchRoutes");
searchRoutes(app);

// connect frontend & backend (so they can be run from 1 server)
const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// start the server listening port 8080
const PORT = 8080;

// confirm port is listening
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
