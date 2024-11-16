import React from "react";
import { useSelector } from "react-redux";

import "./Cast.css";

import ContentWrapper from "../../contentWrapper/ContentWrapper";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return data && data.length > 0 ? (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data.map((item) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : "/images/no-avatar.png";
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <img src={imgUrl} alt={item.name} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  ) : null;
};

export default Cast;
