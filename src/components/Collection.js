/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import Img0 from "../assets/insects/0.png";
import Img1 from "../assets/insects/1.png";
import Img2 from "../assets/insects/2.png";
import Img3 from "../assets/insects/3.png";
import Img4 from "../assets/insects/4.png";

import useMobileType from "../hooks/useMobileType";
import CollectionSlider from "./CollectionSlider";
import CollectionSliderRotated from "./CollectionSliderRotated";
import Bg1 from "../assets/dynaic.svg";
import Bg2 from "../assets/dynaicc.svg";
import Bg3 from "../assets/dynaiccc.svg";
import Bg4 from "../assets/dynaicccc.svg";
import Bg5 from "../assets/dynaiccccc.svg";
const Collection = () => {
  const { isMobile } = useMobileType();

  useEffect(() => {
    let sliderFirst = document.querySelector(".slick-center");

    if (sliderFirst) {
      sliderFirst.getElementsByTagName("img")[0].classList.add("op-1");
      if (!isMobile) {
        sliderFirst.getElementsByTagName("img")[1].classList.add("scaleP2");
        document.getElementById("collectionSection").style.paddingBottom = "5%";
      }
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
    { bg: "bg1", img: Img0, backgrounds: Bg1 },
    { bg: "bg2", img: Img1, backgrounds: Bg2 },
    { bg: "bg3", img: Img2, backgrounds: Bg3 },
    { bg: "bg4", img: Img3, backgrounds: Bg4 },
    { bg: "bg5", img: Img4, backgrounds: Bg5 },
  ];

  return (
    <section
      id="collectionSection"
      className="collectionSection position-relative my-page-section"
    >
      <div className="text-end collHeaderText">
        <h1>
          Released
          <br /> Collection
        </h1>
        <p>
          A glimmer of light, scroll to see the collection,
          <br /> complete with accessories and outfits.
        </p>
      </div>
      {isMobile ? (
        <CollectionSlider items={items} />
      ) : (
        <CollectionSliderRotated items={items} />
      )}
    </section>
  );
};

export default Collection;
