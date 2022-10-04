import React from "react";
import Slider from "react-slick";

const CollectionSlider = ({ items }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    centerMode: true,
    slidesToShow: 1,
    swipeToSlide: true,
  };

  return (
    <Slider id="collSlider" className="collSlider" {...settings}>
      {items.map((item, i) => {
        return (
          <div
            key={`collection Image + ${i}`}
            className={`collSliderItemContainer ${item.bg}`}
          >
            <img
              id={`sliderFirst${i}`}
              src={item.img}
              loading="lazy"
              className={`collSlideImage`}
              alt={`collection Image + ${i}`}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default CollectionSlider;
