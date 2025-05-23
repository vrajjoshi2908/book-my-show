import "./app.css";

// Pages
import HomePage from "./pages/home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

import { Routes, Route } from "react-router-dom";

// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  
}

export default App;
