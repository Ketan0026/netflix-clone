import React from "react";
import "../trending/Trending.css";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

function TopRatedMovies() {
  const { data, loading } = useFetch(`/movie/top_rated`);

  return (
    <div className="carouselSection">
      <Carousel data={data?.results} loading={loading} endpoint="movie" title="Top Rated Movies"/>
    </div>
  );
}

export default TopRatedMovies;