import React, { useEffect, useState } from "react";
import "./Banner.css";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

function Banner() {
  const navigate = useNavigate()
  const [movieBg, setMovieBg] = useState([]);
  const [movieName, setMovieName] = useState([]);
  const [movieDes, setMovieDes] = useState([]);
  const [movieId, setMovieId] = useState('');
  const { url } = useSelector((state) => state.home);
  const { data, loading, endpoint } = useFetch("/movie/popular");
  useEffect(() => {
    const movie_index = Math.floor(Math.random() * 20);
    const bg = url.backdrop + data?.results?.[movie_index]?.backdrop_path;
    const movie_name = data?.results?.[movie_index]?.title;
    const movie_description = data?.results?.[movie_index]?.overview;
    const movie_id = data?.results?.[movie_index]?.id;
    setMovieBg(bg);
    setMovieName(movie_name);
    setMovieDes(movie_description);
    setMovieId(movie_id)
  }, [data]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <>
      {!loading && (
        <header
          className="banner"
          style={{ backgroundImage: `url(${movieBg})` }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">{movieName}</h1>
            <div className="banner__buttons">
              <button className="banner__button"onClick={() =>
                    navigate(`/subscription`)
                  }>Play</button>
              <button className="banner__button" onClick={() =>
                    navigate(`/movie/${movieId}`)
                  }>More Info</button>
            </div>
            <h1 className="banner__description">{truncate(movieDes, 250)}</h1>
          </div>

          <div className="banner_fadeLeft"></div>
          <div className="banner--fadeBottom" />
        </header>
      )}
    </>
  );
}

export default Banner;
