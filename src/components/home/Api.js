import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZThiYjg1NjY4ZjhmMDlhYzlkNWZmY2VlZDFmYmNiOSIsInN1YiI6IjY1YjBkZmVhM2M0MzQ0MDE5MzY2MGVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tGFZWL6FF1w7b4N_tJ9rcUD6sfyX7LeNBvBdblGE8Ew";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_API_TOKEN}`,
  },
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, options);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
