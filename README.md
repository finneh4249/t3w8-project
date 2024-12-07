# OMDB Search App

## Description

The OMDB Search App is a web application that allows users to search for movies and TV shows by title. It uses the [Open Movie Database (OMDb) API](http://www.omdbapi.com/) to retrieve detailed information about movies and TV shows, including actors, awards, director, rating, runtime, and more. Users can add movies to a personal watchlist and view it on a separate page.

## Features

- Search for movies and TV shows by title
- View detailed information about each movie or TV show
- Add movies to a personal watchlist
- Remove movies from the watchlist
- Persist watchlist data using `localStorage`
- Responsive design using React Bootstrap
- Toast notifications for user feedback (e.g., when adding or removing movies from the watchlist)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/omdb-search-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd omdb-search-app
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Obtain an OMDb API key:**

    - Visit [OMDb API](http://www.omdbapi.com/apikey.aspx) to get a free API key.

5. **Create a `.env` file in the root directory and add your API key:**

    ```env
    REACT_APP_OMDB_API_KEY=your_api_key_here
    ```

6. **Start the development server:**

    ```bash
    npm start
    ```

    The app should now be running at `http://localhost:3000`.

## Usage

1. **Search for Movies or TV Shows:**
   - Enter a title in the search bar on the home page and click the "Search" button.
   - A list of matching movies or TV shows will be displayed.

2. **View Details:**
   - Each movie card displays basic information and additional details such as actors, awards, director, rating, and runtime.

3. **Add to Watchlist:**
   - Click the "Add to Watchlist" button on a movie card to add it to your personal watchlist.
   - A toast notification will confirm the action.

4. **View Watchlist:**
   - Navigate to the "Watchlist" page using the navigation bar.
   - The watchlist displays all movies you've added, along with their posters.

5. **Remove from Watchlist:**
   - Click the "Remove" button next to a movie in the watchlist to remove it.
   - A toast notification will confirm the removal.

## Screenshots

\[Coming Soon]

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **React Router** - For client-side routing
- **React Bootstrap** - UI components for responsive design
- **Axios** - Promise-based HTTP client for API requests
- **React Toastify** - For toast notifications
- **React-Use** - Collection of essential React hooks (used for `useLocalStorage`)
- **OMDb API** - Data source for movie information

## Project Structure

```src/ 
├── components/ 
│ └── MovieCard.jsx 
├── pages/ 
│ ├── Home.jsx 
│ └──  Watchlist.jsx 
├── context/ 
│ └── WatchlistContext.jsx 
├── App.jsx 
└── index.js
```

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [OMDb API](http://www.omdbapi.com/) for providing movie data
- [React Bootstrap](https://react-bootstrap.github.io/) for UI components
- [React Toastify](https://fkhadra.github.io/react-toastify/) for toast notifications