import React, { useState } from "react";
import { BiInfinite } from "react-icons/bi";
import Slider from 'react-slick';

const EntertainmentCard = (props) => {
    return (
        <>
        <div className="w-full h-30 px-2">
            <img
            className="w-full h-30 rounded-lg"
            src={props.src} alt="Entertainment" 
            />
        </div>
        </>
    )
}

const EntertainmentCardSlider = () => {

    const EntertainmentImage =[
         "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/music-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/esports-collection-202011150107.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/self-improvement-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/interactive-games-collection-202012041129.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/art-and-crafts-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/theatre-shows-collection-202012041128.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
      ];
   
    const settings={
        autoplay: false,
        slidesToShow: 5,
        infinite: false,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive:[
            {
                breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                
            },
        },
         {
                breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
            },
        },
         {
                breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
            },
        },

        ]
    };
    return(
    <>
    <Slider {...settings}>
        {EntertainmentImage.map((image)=>(
            <EntertainmentCard src={image}/>
        ))}    
 </Slider>

    </>
)

}

export default  EntertainmentCardSlider ;