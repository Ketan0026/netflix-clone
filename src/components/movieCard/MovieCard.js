import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./MovieCard.css";
import Img from "../lazyLoadImages/Img";

const MovieCard = ({ data, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : "/images/no-poster.png";
  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
      </div>
    </div>
  );
};

export default MovieCard;
