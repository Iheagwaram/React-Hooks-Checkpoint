import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={movie.posterURL} alt={movie.title} className="w-full h-60 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
      <p className="font-semibold">Rating: {movie.rating}</p>
      <Link to={`/movie/${movie.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
};

export default MovieCard;