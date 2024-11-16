import React from "react";
import "./Home.css";
import Banner from "./Banner/Banner";
import Header from "../header/Header";
import TrendingMovies from "./trending/TrendingMovies";
import PopularMovies from "./popular/PopularMovies";
import TopRatedMovies from "./topRated/TopRatedMovies";
import UpcomingMovies from "./upcoming/UpcomingMovies";
import TrendingTVShows from "./trending/TrendingTVShows";
import PopularTVShows from "./popular/PopularTVShows";
import TopRatedTVShows from "./topRated/TopRatedTVShows";
import UpcomingTVShows from "./upcoming/UpcomingTVShows";
import HomeFooter from "../footer/HomeFooter";

function Home() {
  return (
    <div className="homePage">
      <Header />
      <Banner />
      <TrendingMovies />
      <TrendingTVShows />
      <PopularMovies />
      <PopularTVShows />
      <TopRatedMovies />
      <TopRatedTVShows />
      <UpcomingMovies />
      <UpcomingTVShows />
      <HomeFooter />
    </div>
  );
}

export default Home;
