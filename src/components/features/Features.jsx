import React from "react";
import { useMediaQuery } from "react-responsive";
import coconut from "../../images/features/ingreadient.png";
import Slider from "react-slick";

const cocos = [1, 2, 3, 4];

const featuresSlider = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  cssEase: "ease-in",
  slidesToShow: 1,
};

function Features() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  return isMobile ? (
    <Slider {...featuresSlider} className="features__block-slider">
      {cocos.map((el) => {
        return (
          <div className="features__block-slide" key={el}>
            <div className="features__block-slide-image">
              <img src={coconut} alt="coconut" />
            </div>
            <div className="features__block-slide-title">Coco Glucoside</div>
            <p>Compatible for all skin types and gentle on the skin</p>
          </div>
        );
      })}
    </Slider>
  ) : (
    <div className="features__block-slider">
      {cocos.map((el) => {
        return (
          <div className="features__block-slide" key={el}>
            <div className="features__block-slide-image">
              <img src={coconut} alt="coconut" />
            </div>
            <div className="features__block-slide-title">Coco Glucoside</div>
            <p>Compatible for all skin types and gentle on the skin</p>
          </div>
        );
      })}
    </div>
  );
  //
}

export default Features;
