import "./App.css";
import React from "react";

import HomePage from "./pages/home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

import { Routes, Route } from "react-router-dom";
import axios from "axios";



// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_APP_TMDB_API_KEY;


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};

//  axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
 axios.defaults.params["api_key"]= "e95d2242e3b466e39dd5e4a48e9cfc79";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
