import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/" className="text-blue-500">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;