import React from "react";
import "../trending/Trending.css";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

function PopularTVShows() {
  const { data, loading } = useFetch(`/tv/popular`);

  return (
    <div className="carouselSection">
      <Carousel data={data?.results} loading={loading} endpoint="tv" title="Popular TV Shows"/>
    </div>
  );
}

export default PopularTVShows;