import React from "react";
import { useSelector } from "react-redux";

import "./Genres.css";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  let counter = 0;
  counter++;
  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <>
            <div key={g} className="genre">
              {genres[g]?.name}
            </div>
              {data.length - 1 != data.indexOf(g) && (
                <img key={g+1} src="/images/line-separator.svg" alt="" />
              )}
          </>
        );
      })}
    </div>
  );
};

export default Genres;
