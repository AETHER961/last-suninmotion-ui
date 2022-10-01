import React from "react";
import Welcome from "./Welcome";
import Story from "./Story";
import Benefits from "./Benefits";
import Team from "./Team";
import Footer from "./Footer";
import GradientDevider from "./GradientDevider";
import Collection from "./Collection";
import Roadmap from "./Roadmap";

const Main = () => {
  return (
    <div className="mainSection">
      <Welcome />
      <Story />
      <Benefits />
      <Collection />
      <Roadmap />
      <Team />
      <GradientDevider />
      <Footer />
    </div>
  );
};

export default Main;
