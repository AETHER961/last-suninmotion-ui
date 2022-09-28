import React, { useEffect, useState } from "react";
import bluePill from "../assets/bluePill.svg";
import fly from "../assets/insects/solim.png";

const Benefits = () => {
  const [scrollIndex, setScrollingIndex] = useState(0);
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

    if (accRowIndex === 3) {
      completeOneRound = true;
      accRowIndex = 0;
      setScrollingIndex(0);
      window.removeEventListener("wheel", preventDefault, { passive: false });
      benefitsSection.removeEventListener("wheel", handleScroll, {
        passive: false,
      });
    } else {
      if (!fired) {
        if (accRowIndex >= 0 && accRowIndex < 3) {
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
    benefitsSection.addEventListener("mouseenter", () => {
      !completeOneRound &&
        window.addEventListener("wheel", preventDefault, { passive: false });
      !completeOneRound &&
        benefitsSection.addEventListener("wheel", handleScroll, {
          passive: false,
        });
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
      className="benefitsSection px-2 position-relative"
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
                <p
                  className={`col-2 ${
                    scrollIndex === 0 ? "benefitNbr" : "unFocusedBenefitNbr"
                  }`}
                >
                  01
                </p>
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
                        Lorem ipsum dolor sit amet. Ut repellendus iusto ,Lorem
                        ipsum dolor sit amet. Ut repellendus iusto.Lorem ipsum
                        sitamet. Ut repellendus iusto .
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={`benefitItem row p-0 `}>
                <p
                  className={`col-2 ${
                    scrollIndex === 1 ? "benefitNbr" : "unFocusedBenefitNbr"
                  }`}
                >
                  02
                </p>
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
                        Lorem ipsum dolor sit amet. Ut repellendus iusto ,Lorem
                        ipsum dolor sit amet. Ut repellendus iusto.Lorem ipsum
                        sitamet. Ut repellendus iusto .
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={`benefitItem row p-0  `}>
                <p
                  className={`col-2 ${
                    scrollIndex === 2 ? "benefitNbr" : "unFocusedBenefitNbr"
                  }`}
                >
                  03
                </p>
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
                        Lorem ipsum dolor sit amet. Ut repellendus iusto ,Lorem
                        ipsum dolor sit amet. Ut repellendus iusto.Lorem ipsum
                        sitamet. Ut repellendus iusto .
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={`benefitItem row p-0  `}>
                <p
                  className={`col-2 ${
                    scrollIndex === 3 ? "benefitNbr" : "unFocusedBenefitNbr"
                  }`}
                >
                  04
                </p>
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
                        Lorem ipsum dolor sit amet. Ut repellendus iusto ,Lorem
                        ipsum dolor sit amet. Ut repellendus iusto.Lorem ipsum
                        sitamet. Ut repellendus iusto .
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
