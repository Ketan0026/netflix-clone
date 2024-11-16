import React from "react";
import "../trending/Trending.css";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

function PopularMovies() {
  const { data, loading } = useFetch(`/movie/popular`);

  return (
    <div className="carouselSection">
      <Carousel data={data?.results} loading={loading} endpoint="movie" title="Popular Movies"/>
    </div>
  );
}

export default PopularMovies;