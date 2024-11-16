import React from "react";
import "../trending/Trending.css";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

function TopRatedTVShows() {
  const { data, loading } = useFetch(`/tv/top_rated`);

  return (
    <div className="carouselSection">
      <Carousel data={data?.results} loading={loading} endpoint="tv" title="Top Rated TV Shows"/>
    </div>
  );
}

export default TopRatedTVShows;