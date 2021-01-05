import React, { useState, useEffect } from "react";
import axios from "../services/axios";
import request from "../services/request";
import "./Banner.css";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setBanner(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);
  console.log(banner);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const opts = {
    height:"350",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = (banner) => {
    if(trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(banner?.name || "")
      .then 
        ((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"))
        })
       .catch 
        ((error) => console.log(error))
      
    }
  }

  return (
    <>
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${banner.poster_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {banner?.name || banner?.title || banner?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => handleClick(banner)}>Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(banner?.overview,150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
    {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </>
  );
};

export default Banner;
