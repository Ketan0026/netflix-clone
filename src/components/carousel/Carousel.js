import React, { useLayoutEffect, useRef, useState } from "react";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImages/Img";

const Carousel = ({ data, loading, endpoint, title }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const carouselContainer = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  useLayoutEffect(() => {
    const container = carouselContainer.current;

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
    };

    const handleResize = () => {
      setContainerWidth(container.offsetWidth);
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      setScrollWidth(container.scrollWidth);
      setContainerWidth(container.offsetWidth);
      setScrollPosition(container.scrollLeft);
    }

    setTimeout(() => {
      if (initialRender) {
        setInitialRender(false);
      }
    }, 2000);
    setTimeout(() => {
      if (initialRender) {
        setInitialRender(false);
      }
    }, 5500);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [initialRender, scrollPosition, scrollWidth, containerWidth]);

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock"></div>
      </div>
    );
  };


  return (
    <div className="carousel" ref={carouselContainer}>
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <div className="organize">
          {scrollPosition > 60 && (
            <span className="handle handlePrev">
              <b onClick={() => navigation("left")}>
                <img src="/images/left-icon.svg" alt="" />
              </b>
            </span>
          )}

          {scrollWidth - (scrollPosition + containerWidth) > 1 && (
            <span className="handle handleNext">
              <b
                onClick={() => {
                  navigation("right");
                }}
              >
                <img src="/images/right-icon.svg" alt="" />
              </b>
            </span>
          )}
          {!loading ? (
            <div className="carouselItems" ref={carouselContainer}>
              {data?.map((item) => {
                const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : "/images/no-poster.png";
                const getDetails = () => {
                  navigate(`/${item.media_type || endpoint}/${item.id}`);
                };
                return (
                  <div
                    key={item.id}
                    className="carouselItem"
                    onClick={getDetails}
                  >
                    <div className="posterBlock">
                      <Img src={posterUrl} />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="loadingSkeleton">
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
            </div>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
