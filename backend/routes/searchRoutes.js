// import the middleware function
const authenticateToken = require("../middleware/authMiddleware");

// import the controllers function
const searchController = require("../controllers/searchController");

// function containing all the possible incoming HTTP requests this website should handle
const searchRoutes = (app) => {

    // I only need to handle GET requests going to the iTunes API (i.e. find this song/artist/album from the database)
    app.get("/api/search", authenticateToken, searchController);
};

module.exports = searchRoutes;
