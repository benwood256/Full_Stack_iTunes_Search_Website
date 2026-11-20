# iTunes Search App

## Description

The iTunes Search App is a full-stack web application built using React for the frontend and Node.js with Express for the backend.

It allows users to search for media by entering a search term and selecting a media category, such as movies, TV shows, music, podcasts and more.

The application uses the iTunes Search API to retrieve relevant results and displays them on the website.

There is no database associated with this application, meaning that favourited items are not persistent and will be lost when the application state is reset.

## Features

* Search the iTunes API for media.
* Filter searches by media category (e.g. Movies, TV Shows, Music, Podcasts, etc.).
* Display relevant search results.
* Add items to a dedicated Favourites section.
* Prevent duplicate items from being added to Favourites.

## Project Structure

```text
itunes-search-api/
│
├── backend/
│   ├── controllers/
│   │   └── searchController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   └── searchRoutes.js
│   ├── generateToken.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Card.jsx
│   │   │   ├── Favourites.jsx
│   │   │   ├── SearchInput.jsx
│   │   │   └── SearchResults.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/benwood256/Full_Stack_iTunes_Search_Website.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Full_Stack_iTunes_Search_Website
   ```

3. Install dependencies:

   Navigate into both the `backend` and `frontend` directories separately and run:

   ```bash
   npm install
   ```

4. Start the development servers:

   Open two separate terminals.

   **Terminal 1 – Backend:**

   ```bash
   cd backend
   npm run dev
   ```

   **Terminal 2 – Frontend:**

   ```bash
   cd frontend
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser (default: `http://localhost:5173`).

   The backend server listens on port `8080` by default.

## Usage

* Select a media category to filter your search (e.g. Movies, TV Shows, Music, etc.) or leave the category set to All.
* Enter a search term (e.g. "Batman").
* View approximately 20 relevant results displayed in the Search Results section.
* Add items to Favourites using the favourite button.
* View favourited items in the Favourites section directly below the search results.