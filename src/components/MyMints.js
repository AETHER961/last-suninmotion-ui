import React, { useState, useEffect } from "react";
import "../index.css";
import Img from "../assets/insects/solim.png";
import emptyBox from "../assets/emptyBox.svg";
import plusIcon from "../assets/plus.svg";
import MintCard from "./MintCard";

const MyMints = ({ setBgDark }) => {
  const [mints, setMints] = useState(true);

  return (
    <section className="my-mints d-flex flex-column">
      {mints ? (
        <>
          <div>
            <p className="myMintsTitle">My Mints</p>
            <div className="d-flex align-items-center justify-content-space-around gap-3 flex-wrap">
              <MintCard Img={Img} />
              <MintCard Img={Img} />
              <MintCard Img={Img} />
              <MintCard Img={Img} />
              <MintCard Img={Img} />

              <div className="text-center d-flex flex-column align-items-center justify-content-center mintingCardContainer explore-more">
                <p>Explore More</p>
                <span>See our ultimate collection something to write here</span>
                <img src={plusIcon} alt="plusIcon" className="mt-3" />
              </div>
            </div>
          </div>
          <p className="mt-4">Suninmotion © 2022</p>
        </>
      ) : (
        //no mints
        <div>
          <p className="m-0">My Mints</p>
          <div
            className="no-mints d-flex flex-column"
            style={{ backgroundColor: "blue" }}
          >
            <img src={emptyBox} alt="emptyBox" />
            <p className="p-no-mints">No mints here.</p>
            <p className="p-you-didnt">You didn’t mint any NFT.</p>
            <button className="btn mint-now">MINT NOW</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyMints;