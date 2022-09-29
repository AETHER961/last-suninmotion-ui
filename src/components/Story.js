/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import storyImage from "../assets/antennas.png";

const Story = () => {
  return (
    <section id="storySection" className="storySection px-2 position-relative">
      <div className="row m-0">
        <div className="col-12 col-lg-7 col-xl-8 px-0 pb-5">
          <h1 className="storyTitle">
            The Story
            <br /> of Solim
          </h1>
          <span className="storySubTitle mb-5">
            Lorem ipsum dolor sit amet. Ut repellendus
            <br /> iusto aut nihil eligendaut. dolor expedita.
          </span>
          <p className="fs-4 mt-5 storyText">
            Project Solim takes place in year 3860 in a world where mother
            nature has taken back the earth after devastating weather events
            have ravaged mankind due to climate change. Small factions of humans
            have managed to survive and see SOLIM our firefly as the beacon of
            light that will guide them to building a new civilisation!
            Unfortunately the path to illumination and this new world is
            inhabited by fierce Apex predators and the Animal Kingdom has taken
            back areas once occupied by humans which has left humans in the dark
            ages unable to build a new era for human kind.
          </p>
          <p className="fs-4 storyText">
            The buildings and areas our human factions want to call home possess
            the capability of sustainable power resources like Solar, Wind
            energy and other renewable resources which will enable them to
            thrive unfortunately these are guarded by Apex predators that are
            extremely territorial and will stop at nothing to protect their new
            domain. Help our Human heroes to once again thrive and try to make
            peace with the animal kingdom once again.
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
