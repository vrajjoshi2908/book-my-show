import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App';
import MovieProider from './context/Movie.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieProider>
      <App />
    </MovieProider>
    </BrowserRouter>
  </React.StrictMode>
);


