import React from "react";
import Img1 from "../assets/insects/1.png";
import Img2 from "../assets/insects/2.png";
import Img3 from "../assets/insects/3.png";
import Img4 from "../assets/insects/4.png";
import Img5 from "../assets/insects/5.png";

const CollectionSlider = () => {
  const items = [Img1, Img2, Img3, Img4, Img5];
  return (
    <div className="collSlider d-flex">
      {items.map((item, i) => {
        return (
          <div key={i} className="collSliderItemContainer">
            <img src={item} alt={"item" + i} />
          </div>
        );
      })}
    </div>
  );
};

export default CollectionSlider;
