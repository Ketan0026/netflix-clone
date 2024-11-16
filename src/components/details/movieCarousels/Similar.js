import React from "react";

import "./MovieCarousels.css";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../carousel/Carousel";

const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
  const hasData = data?.total_results;

  return (
    <div className={`similar ${hasData ? "show" : ""}`}>
      <Carousel
        title={data?.total_results ? title : ""}
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </div>
  );
};

export default Similar;
