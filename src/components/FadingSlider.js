import React, { useEffect, useRef, useState } from "react";
import Img2 from "../assets/insects/2.png";
import Img3 from "../assets/insects/3.png";
import Img4 from "../assets/insects/4.png";
import Img5 from "../assets/insects/1.png";

const sliderImages = [
  <div className="welcomeImageSlide welcomeBgPill">
    <img src={Img2} alt="solim1" />
  </div>,
  <div className="welcomeImageSlide welcomeBgPill">
    <img src={Img3} alt="solim2" />
  </div>,
  <div className="welcomeImageSlide welcomeBgPill">
    <img src={Img4} alt="solim3" />
  </div>,
  <div className="welcomeImageSlide welcomeBgPill">
    <img src={Img5} alt="solim4" />
  </div>,
];

const FadingSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 4990;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSliderIndex((prevIndex) =>
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [sliderIndex]);

  return (
    <div className="align-self-center welcomeSliderContainer">
      {sliderImages[sliderIndex]}
    </div>
  );
};

export default FadingSlider;
