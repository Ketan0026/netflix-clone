import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Header from "../header/Header";
import HomeFooter from "../footer/HomeFooter";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Recommendation from "./movieCarousels/Recommendation";
import Similar from "./movieCarousels/Similar";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div style={{ background: "#0b0c0c" }}>
      <Header />
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
      <div style={{ borderTop: "0.8rem solid rgb(35, 35, 35)" }}></div>
      <HomeFooter />
    </div>
  );
};

export default Details;
