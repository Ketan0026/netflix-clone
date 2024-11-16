import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./DetailsBanner.css";

import ContentWrapper from "../../contentWrapper/ContentWrapper.js";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../genres/Genres.js";
import Img from "../../lazyLoadImages/Img.js";
import { Navigate } from "react-router-dom";
import VideoPopup from "../../videoPopup/VideoPopup.js";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const navigate = useNavigate();

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres?.map((g) => g.id);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                {data.backdrop_path ? (
                  <Img
                    className="img-backDrop"
                    src={url.backdrop + data.backdrop_path}
                  />
                ) : (
                  <Img className="img-backDrop" src="/images/no-poster.png" />
                )}
                <div className="opacity-layer"></div>
                <div className="details-content">
                  <div className="title">{`${data.name || data.title} `}</div>
                  <div className="movie-info">
                    <span>{dayjs(data?.release_date).format("YYYY")}</span>
                    {data.runtime && (
                      <>
                        <img src="/images/dot-separator.svg" alt="" />
                        <span>
                          {toHoursAndMinutes(data.runtime)}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="movie-description">
                    {truncate(data.overview, 200)}
                  </div>
                  <Genres data={_genres} />
                  <div className="banner__buttons">
                    <button
                      className="banner__button details-playBtn"
                      onClick={() => navigate(`/subscription`)}
                    >
                      <img src="/images/play-btn.svg" alt="" />
                      Watch Now
                    </button>
                    <button
                      className="banner__button"
                      onClick={() => {
                        setShow(true);
                        setVideoId(video?.key);
                      }}
                    >
                      Trailer
                    </button>
                  </div>
                </div>
              </div>

              <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
              />
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;