import React from "react";
import "../trending/Trending.css";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

function UpcomingMovies() {
  const { data, loading } = useFetch(`/movie/upcoming`);

  return (
    <div className="carouselSection">
      <Carousel data={data?.results} loading={loading} endpoint="movie" title="Upcoming Movies"/>
    </div>
  );
}

export default UpcomingMovies;