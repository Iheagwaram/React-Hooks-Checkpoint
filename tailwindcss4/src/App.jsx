import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDetail from "./MovieDetail";

const App = () => {
  const [movies, setMovies] = useState([
    { title: "Inception", description: "A mind-bending thriller", posterURL: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg", rating: 9, trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0" },
    { title: "Interstellar", description: "Sci-fi masterpiece", posterURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg", rating: 8.5, trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E" },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: prompt("Enter movie title:"),
      description: prompt("Enter movie description:"),
      posterURL: prompt("Enter poster URL:"),
      rating: parseFloat(prompt("Enter rating:")),
      trailerURL: prompt("Enter trailer URL:"),
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Router>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
                <button onClick={addMovie} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Movie</button>
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
