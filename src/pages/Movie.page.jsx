import axios from 'axios';
import React, { useEffect,useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import MovieLayout from '../layouts/Movie.layout'
import { MovieContext } from '../context/Movie.context';
import Slider from 'react-slick';
import { FaCcVisa,FaCcApplePay } from 'react-icons/fa';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import MovieHero from '../components/MovieHero/MovieHero.Component';
const MoviePage = () => {
  const { id } = useParams();

  const { movie ,setMovie} = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      
        const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
        console.log('Recommended Movies API response:', getRecommendedMovies.data);
        setRecommendedMovies(getRecommendedMovies.data.results);
      
    };
    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);

  const settingCast = {};

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint:1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
         
        },
      },

        {
        breakpoint:600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3
         
        },
      },
        {
        breakpoint:480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 4
         
        }
      },
    ]
  };

  return (
    <>
     <MovieHero /> 

      <div className="my-12 container px-4 lg:ml-20 lg-w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl my-3'>Application offers</h2>
          <div className='flex flex-col gap-3 lg:flex-row lg:w-3/4'>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcVisa className='w-full h-full' />
              </div>
              <div className='flex flex-col item-start'>
                <h3 className='text-gray-700 text-xl font-bold'>Visa Stream Offer</h3>
                <p className='text-gray-600 '>Get 50% off upto INR 150 on all Rupay cards* on BookMyShow</p>
              </div>
            </div>

             <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcApplePay className='w-full h-full' />
              </div>
              <div className='flex flex-col item-start'>
                <h3 className='text-gray-700 text-xl font-bold'>Film Pass</h3>
                <p className='text-gray-600 '>Get 50% off upto INR 150 on all Rupay cards* on BookMyShow</p>
              </div>
            </div>
          </div>
        </div>
      

 
{/* Cast  slider */}
        <div className="my-8">
          <hr />
        </div> 

        {/* Recommended Movies slider */}

      <div className='my-8'>
       
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
     
      </div>

        {/* Recommended Movies slider */}

        <div className="my-8">
          <hr />
        </div>
        
        <PosterSlider
            config={settings}
            title="BookMyShow Exclusive Movies"
            posters={recommendedMovies}
            isDark={false}
          /> 
        </div> 
         <div className="my-8">
          <hr />
        </div>   
    </>
  );
};

export default MovieLayout(MoviePage)
