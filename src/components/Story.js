/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import storyImage from "../assets/antennas.png";

const Story = () => {
  return (
    <section id="storySection" className="storySection px-2 position-relative">
      <div className="row m-0">
        <div className="col-12 col-lg-7 col-xl-9 px-0 pb-5">
          <h1 className="storyTitle">
            The Story
            <br /> of Solim
          </h1>
          <span className="storySubTitle mb-5">
            Lorem ipsum dolor sit amet. Ut repellendus
            <br /> iusto aut nihil eligendaut. dolor expedita.
          </span>
          <p className="fs-4 mt-5 storyText">
            Lorem ipsum dolor sit amet. Ut repellendus iusto aut nihil
            eligendaut dolor expedita. Lorem ipsum dolor sit amet. Ut
            repellendus iusto aut nihil eligendaut .dolor expedita. Lorem ipsum
            dolor sit amet. Ut repellendus iusto aut nihil eligendaut .dolor
            expedita.
          </p>
          <p className="fs-4 storyText">
            Lorem ipsum dolor sit amet. Ut repellendus iusto aut nihil
            eligendaut dolor expedita. Lorem ipsum dolor sit amet. Ut
            repellendus iusto aut nihil eligendaut .dolor expedita. Lorem ipsum
            dolor sit amet.
          </p>
        </div>
        <div className="col-12 col-lg-5 col-xl-3 p-0">
          <img
            src={storyImage}
            alt="story insect image "
            className="position-absolute storyImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
