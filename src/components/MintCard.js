import React from "react";

const MintCard = ({ Img }) => {
  return (
    <div className="d-flex flex-column mintingCardContainer">
      <img
        src={Img}
        loading="lazy"
        alt="firefly-img"
        className="mintingCardImage"
      />
      <p className="mintCardName text-start">Solim</p>
      <div className="cardGap d-flex justify-content-between">
        <span>Attribute</span>
        <span>Value</span>
      </div>
      <div className="cardGap d-flex justify-content-between">
        <span>Attribute</span>
        <span>Value</span>
      </div>
      <div className="cardGap d-flex justify-content-between">
        <span>Attribute</span>
        <span>Value</span>
      </div>
    </div>
  );
};

export default MintCard;
