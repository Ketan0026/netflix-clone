import React from "react";
import "./Trending.css";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

function TrendingMovies() {
  const { data, loading } = useFetch(`/trending/movie/day`);

  return (
    <div className="carouselSection">
      <Carousel data={data?.results} loading={loading} endpoint="movie" title="Trending Movies"/>
    </div>
  );
}

export default TrendingMovies;
