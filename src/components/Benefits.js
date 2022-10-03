import React, { useEffect, useState } from "react";
import bluePill from "../assets/bluePill.svg";
import fly from "../assets/insects/solim.png";
import n01 from "../assets/011.png";
import n02 from "../assets/022.png";
import n03 from "../assets/033.png";
import n04 from "../assets/044.png";
import n05 from "../assets/055.png";

const Benefits = () => {
  const [scrollIndex, setScrollingIndex] = useState(0);
  const [sectionOffset, setSectionOffset] = useState(null);
  var fired = false;
  var accRowIndex = 0;
  var completeOneRound = false;

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const openSectionByClick = (x) => {
    accRowIndex = x;
    setScrollingIndex(x);
  };

  const handleScroll = () => {
    let benefitsSection = document.getElementById("benefitsSection");

    if (accRowIndex === 4) {
      completeOneRound = true;
      window.removeEventListener("wheel", preventDefault, { passive: false });
      benefitsSection.removeEventListener("wheel", handleScroll, {
        passive: false,
      });
    } else {
      if (!fired) {
        if (accRowIndex >= 0 && accRowIndex < 4) {
          accRowIndex = accRowIndex + 1;
          setScrollingIndex(accRowIndex);
        }
      }
      fired = true;
      setTimeout(() => {
        fired = false;
      }, 300);
    }
  };

  useEffect(() => {
    let benefitsSection = document.getElementById("benefitsSection");
    window.addEventListener("wheel", () => {
      setSectionOffset(benefitsSection.getClientRects()[0].y);
    });
  }, [sectionOffset]);

  useEffect(() => {
    let benefitsSection = document.getElementById("benefitsSection");

    benefitsSection.addEventListener("mouseenter", () => {
      if (sectionOffset < 300 && !completeOneRound) {
        window.addEventListener("wheel", preventDefault, { passive: false });
        benefitsSection.addEventListener("wheel", handleScroll, {
          passive: false,
        });
      }
    });
    benefitsSection.addEventListener("mouseleave", () => {
      window.removeEventListener("wheel", preventDefault, { passive: false });
      benefitsSection.removeEventListener("wheel", handleScroll, {
        passive: false,
      });
    });
  }, []);

  return (
    <section
      id="benefitsSection"
      className="benefitsSection px-2 position-relative my-page-section"
    >
      <div className="row m-0">
        <div className="col-12 col-md-6 p-0">
          <div className="accordionSection">
            <h1 className="benefitsTitle">Benefits</h1>
            <span className="benefitsSubTitle">
              Lorem ipsum dolor sit amet. Ut repellendus iusto.
            </span>
            <div className="scrollabaleArea">
              <div className="benefitItem row p-0">
                <div className={`col-2 `}>
                  {scrollIndex === 0 ? (
                    <img src={n01} alt="n01" className="benefitNbrImg" />
                  ) : (
                    <p className="unFocusedBenefitNbr">01</p>
                  )}
                </div>
                <p
                  className={`col-10 p-0 ${
                    scrollIndex === 0 ? "benefitLabel" : "unFocusedBenefitLabel"
                  }`}
                  onClick={() => openSectionByClick(0)}
                >
                  First Benefit
                </p>

                <div className="row p-0">
                  <div className="col-2 benefitNbr"></div>
                  <div className="col-10">
                    {scrollIndex === 0 && (
                      <p className={`benefitDesc `}>
                        Residual income for all NFT holders generated from the
                        SOLIM solar PV projects deployed in the real world.
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={`benefitItem row p-0 `}>
                <div className={`col-2 `}>
                  {scrollIndex === 1 ? (
                    <img src={n02} alt="n02" className="benefitNbrImg" />
                  ) : (
                    <p className="unFocusedBenefitNbr">02</p>
                  )}
                </div>
                <p
                  className={`col-10 p-0 ${
                    scrollIndex === 1 ? "benefitLabel" : "unFocusedBenefitLabel"
                  }`}
                  onClick={() => openSectionByClick(1)}
                >
                  Second Benefit
                </p>

                <div className="row p-0">
                  <div className="col-2 benefitNbr"></div>
                  <div className="col-10">
                    {scrollIndex === 1 && (
                      <p className={`benefitDesc `}>
                        A chance to be a part of the only utility based NFT
                        project that will be giving back to people in fuel
                        crisis by building solar PV plants that will generate
                        energy for those in need globally.
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={`benefitItem row p-0  `}>
                <div className={`col-2 `}>
                  {scrollIndex === 2 ? (
                    <img src={n03} alt="n03" className="benefitNbrImg" />
                  ) : (
                    <p className="unFocusedBenefitNbr">03</p>
                  )}
                </div>
                <p
                  className={`col-10 p-0 ${
                    scrollIndex === 2 ? "benefitLabel" : "unFocusedBenefitLabel"
                  }`}
                  onClick={() => openSectionByClick(2)}
                >
                  Third Benefit
                </p>

                <div className="row p-0">
                  <div className="col-2 benefitNbr"></div>
                  <div className="col-10">
                    {scrollIndex === 2 && (
                      <p className={`benefitDesc`}>
                        Exclusive access to the P2E game and SOLIM metaverse.
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={`benefitItem row p-0  `}>
                <div className={`col-2 `}>
                  {scrollIndex === 3 ? (
                    <img src={n04} alt="n04" className="benefitNbrImg" />
                  ) : (
                    <p className="unFocusedBenefitNbr">04</p>
                  )}
                </div>
                <p
                  className={`col-10 p-0 ${
                    scrollIndex === 3 ? "benefitLabel" : "unFocusedBenefitLabel"
                  }`}
                  onClick={() => openSectionByClick(3)}
                >
                  Fourth Benefit
                </p>

                <div className="row p-0">
                  <div className="col-2 benefitNbr"></div>
                  <div className="col-10">
                    {scrollIndex === 3 && (
                      <p className={`benefitDesc`}>
                        Access to events on renewable energy and climate change
                        with celebrities and influencers who share our vision
                        for a brighter future.
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={`benefitItem row p-0  `}>
                <div className={`col-2 `}>
                  {scrollIndex === 4 ? (
                    <img src={n05} alt="n05" className="benefitNbrImg" />
                  ) : (
                    <p className="unFocusedBenefitNbr">05</p>
                  )}
                </div>
                <p
                  className={`col-10 p-0 ${
                    scrollIndex === 4 ? "benefitLabel" : "unFocusedBenefitLabel"
                  }`}
                  onClick={() => openSectionByClick(4)}
                >
                  Fifth Benefit
                </p>

                <div className="row p-0">
                  <div className="col-2 benefitNbr"></div>
                  <div className="col-10">
                    {scrollIndex === 4 && (
                      <p className={`benefitDesc`}>
                        Quarterly prize drops to the community in the form of
                        tech, solar pv systems for your home and other
                        merchandise supplied by our partners and sponsors.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 p-0 benefitsRightSection">
          <img src={fly} alt="benifts fly" className="benefitsFly" />
          <img
            src={bluePill}
            alt="benifts pill"
            className="position-absolute bluePill"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;

//fifth benefit : Quarterly prize drops to the community in the form of tech, solar pv systems for your home and other merchandise supplied by our partners and sponsors.
