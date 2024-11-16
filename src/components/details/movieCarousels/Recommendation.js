import React from "react";

import "./MovieCarousels.css";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../carousel/Carousel";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);
  const hasData = data?.total_results;

  return (
    <div className={`recommend ${hasData ? "show" : ""}`}>
      <Carousel
        title={data?.total_results ? "Recommendations" : ""}
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </div>
  );
};

export default Recommendation;
