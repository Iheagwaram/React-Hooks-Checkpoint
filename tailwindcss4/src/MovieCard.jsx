import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="border w-full p-4 rounded-lg shadow-md">
      <img src={movie.posterURL} alt={movie.title} className="w-[100px] h-[60px] object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
      <p>{movie.description}</p>
      <p className="font-semibold">Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;