import React from "react";
import "../trending/Trending.css";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

function UpcomingTVShows() {
  const { data, loading } = useFetch(`/tv/on_the_air`);

  return (
    <div className="carouselSection">
      <Carousel data={data?.results} loading={loading} endpoint="tv" title="Upcoming TV Shows"/>
    </div>
  );
}

export default UpcomingTVShows;