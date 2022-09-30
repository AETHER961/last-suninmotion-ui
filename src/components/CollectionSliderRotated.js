import React, { useEffect } from "react";
import Slider from "react-slick";
import useMobileType from "../hooks/useMobileType";

import orangePill from "../assets/orangePill.svg";
import "../rotatedSLider.css";

const CollectionSliderRotated = ({ items }) => {
  const { isMobile } = useMobileType();

  useEffect(() => {
    let rotatedSlider = document.querySelector(".releasedcollection-main");
    if (rotatedSlider && !isMobile) {
      rotatedSlider.style.width = window.screen.width;
    }
  }, [isMobile]);

  var settings = {
    infinite: true,
    dots: false,
    autoplay: false,
    speed: 400,
    slidesToShow: 4,
    swipeToSlide: true,
    centerMode: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="collection"
      className="carousel-main my-pagination-section every-section"
    >
      <div className="releasedcollection-main">
        <div className="slider-div">
          <Slider className="normal-one" {...settings}>
            {items.map((item, i) => {
              return (
                <div className="slide-wrapper" key={`${i}`}>
                  <img
                    src={item.img}
                    id="overall-svg"
                    className="hiddenOverallImg collSlideImage"
                    loading="lazy"
                    alt="over svg fly"
                  />
                  <img
                    src={orangePill}
                    className="slider-svg sliderBgOrange"
                    loading="lazy"
                    alt="slider-svg"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CollectionSliderRotated;

/* var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    // centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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

*/
