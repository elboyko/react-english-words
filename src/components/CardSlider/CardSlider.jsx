import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import words from "../Card/letters.json"
import style from "./CardSlider.module.css"

const CardSlider = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <div className={style.slider_container} >
         <div className={style.slider}>
            <Slider {...settings}>
               {words.map((word) => (
                  <Card key={word.id} {...word} />
               ))}
            </Slider>
         </div>
      </div>
   );
};

export default CardSlider;