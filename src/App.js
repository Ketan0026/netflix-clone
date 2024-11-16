import "./App.css";
import Content from "./components/content/Content";
import FaqPage from "./components/FAQ Section/FaqPage";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import LandingPage from "./components/landing page/LandingPage";
import Navbar from "./components/landing page/Navbar";
import Login from "./components/login/Login";
import Details from "./components/details/Details";
import SearchResult from "./components/searchResult/SearchResult";
import Explore from "./components/explore/Explore";
import PageNotFound from "./components/404/PageNotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { fetchDataFromApi } from "./components/home/Api";
import { useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./features/user/homeSlice";
import Subscription from "./components/subscription/Subscription";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <LandingPage />
            <Content />
            <FaqPage />
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<Home />} />

      <Route path="/subscription" element={<Subscription />} />

      <Route path="/:mediaType/:id" element={<Details />} />

      <Route path="/search/:query" element={<SearchResult />} />

      <Route path="/explore/:mediaType" element={<Explore />} />

      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((data) => {
      if (data && data.images) {
        const url = {
          backdrop: data.images.secure_base_url + "original",
          poster: data.images.secure_base_url + "original",
          profile: data.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      }
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.forEach(({ genres }) => {
      if (genres) {
        genres.forEach((item) => {
          allGenres[item.id] = item;
        });
      }
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
