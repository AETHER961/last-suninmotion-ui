/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import Img1 from "../assets/insects/1.png";
import Img2 from "../assets/insects/2.png";
import Img3 from "../assets/insects/3.png";
import Img4 from "../assets/insects/4.png";
import Img5 from "../assets/insects/5.png";
import useMobileType from "../hooks/useMobileType";
import CollectionSlider from "./CollectionSlider";
import CollectionSliderRotated from "./CollectionSliderRotated";

const Collection = () => {
  const { isMobile } = useMobileType();

  useEffect(() => {
    let sliderFirst = document.querySelector(".slick-center");

    if (sliderFirst) {
      sliderFirst.getElementsByTagName("img")[0].classList.add("op-1");
      !isMobile &&
        sliderFirst.getElementsByTagName("img")[1].classList.add("scaleP2");
    }
  }, [isMobile]);

  useEffect(() => {
    let images = document.querySelectorAll(".collSlideImage");
    let sliderFirst = document.querySelector(".slick-center");

    images.forEach((img) => {
      if (!isMobile) {
        img.addEventListener("mouseenter", () => {
          sliderFirst.getElementsByTagName("img")[0].classList.remove("op-1");
          img.style.opacity = 1;
          sliderFirst
            .getElementsByTagName("img")[1]
            .classList.remove("scaleP2");
          img.parentNode
            .querySelector(".sliderBgOrange")
            .classList.add("scaleP2");
        });
        img.addEventListener("mouseleave", () => {
          img.style.opacity = 0;
          img.parentNode
            .querySelector(".sliderBgOrange")
            .classList.remove("scaleP2");
        });
      } else {
        img.classList.add("op-1");
      }
    });
  }, [isMobile]);

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
      {isMobile ? (
        <CollectionSlider items={items} />
      ) : (
        <CollectionSliderRotated items={items} />
      )}
    </div>
  );
};

export default Collection;
