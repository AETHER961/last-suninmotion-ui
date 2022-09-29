/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import Slider from "react-slick";
import Img1 from "../assets/insects/1.png";
import Img2 from "../assets/insects/2.png";
import Img3 from "../assets/insects/3.png";
import Img4 from "../assets/insects/4.png";
import Img5 from "../assets/insects/5.png";
import useMobileType from "../hooks/useMobileType";

const Collection = () => {
  const { isMobile } = useMobileType();

  useEffect(() => {
    let sliderFirst = document.querySelector(".slick-center");
    sliderFirst.getElementsByTagName("img")[0].classList.add("op-1");
  }, []);

  useEffect(() => {
    let images = document.querySelectorAll(".collSlideImage");
    let sliderFirst = document.querySelector(".slick-center");

    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        sliderFirst.getElementsByTagName("img")[0].classList.remove("op-1");
        img.style.opacity = 1;
      });
      img.addEventListener("mouseleave", () => {
        img.style.opacity = 0;
      });
    });
  }, [isMobile]);

  var settings = {
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

  const items = [
    { bg: "bg1", img: Img1 },
    { bg: "bg2", img: Img2 },
    { bg: "bg3", img: Img3 },
    { bg: "bg4", img: Img4 },
    { bg: "bg5", img: Img5 },
    { bg: "bg1", img: Img1 },
    { bg: "bg2", img: Img2 },
  ];

  return (
    <div id="collectionSection" className="collectionSection position-relative">
      <div className="text-end collHeaderText">
        <h1>
          Released
          <br /> Collection
        </h1>
        <p>
          Lorem ipsum dolor sit amet. Ut
          <br /> .repellendus iusto aut nihil
        </p>
      </div>
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
    </div>
  );
};

export default Collection;
