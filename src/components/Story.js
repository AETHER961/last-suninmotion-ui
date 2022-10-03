/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import storyImage from "../assets/antennas.png";

const Story = () => {
  return (
    <section
      id="storySection"
      className="storySection px-2 position-relative my-page-section"
    >
      <div className="row m-0">
        <div className="col-12 col-lg-7 col-xl-8 px-0 pb-5">
          <h1 className="storyTitle">
            The Story
            <br /> of Solim
          </h1>
          <span className="storySubTitle mb-5">
            It is the year 3860, Mother Nature has taken back the Earth after
            devastating weather events have ravaged humankind.
          </span>
          <p className="fs-4 mt-5 storyText">
            Small factions of humans have managed to survive and see SOLIM our
            firefly as the beacon of light that will guide them to building a
            new civilisation! Unfortunately, the path to illumination and this
            new world is inhabited by fierce apex predators who resent humans
            for all they've done. The Animal Kingdom has taken everything back,
            leaving humans in the dark ages as they struggle to build a new era.
          </p>
          <p className="fs-4 storyText">
            The buildings and areas that our human factions want to call home
            possess the capability of sustainable power resources like solar,
            wind and other renewable resources which will enable them to thrive
            in this new era. Yet, the terrirotial apex predators guard these
            energy sources. Along with the help of Solim, Project Solim takes
            place to respond make peace with the animal kingdown and embrace a
            new way. Along with Solim, you can help these human heroes thrive
            once again.
          </p>
        </div>
        <div className="col-12 col-lg-5 col-xl-3 p-0">
          <img
            src={storyImage}
            alt="story insect image "
            className="storyImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
