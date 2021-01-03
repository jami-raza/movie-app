import React, { useEffect, useState } from "react";
import axios from "../services/axios";
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition
  useEffect(() => {
    // if [], when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {/* several row posters */}
        {movies.map((movie, key) => (
          <img
            key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"} `}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
