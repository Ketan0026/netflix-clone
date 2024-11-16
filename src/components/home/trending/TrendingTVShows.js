import React from "react";
import "../trending/Trending.css";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

function TrendingTVShows() {
  const { data, loading } = useFetch(`/trending/tv/day`);

  return (
    <div className="carouselSection">
      <Carousel data={data?.results} loading={loading} endpoint="tv" title="Trending TV Shows"/>
    </div>
  );
}

export default TrendingTVShows;