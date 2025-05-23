import React ,{useState} from 'react'

//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.Component'

// Layouts Hoc
import DefaultLayout from '../layouts/Default.layout'

const HomePage = () => {

  const [recommendedMovies, setRecommendedMovies] = useState([])
    const [primierMovies, setprimierMovies] = useState([])
      const [onlineStreamEvents, setonlineStreamEvents] = useState([])

  return (
    <div>
      <HeroCarousel/>
    </div>
  )
}

export default DefaultLayout(HomePage)
