import React from "react";
import Welcome from "./Welcome";
import Story from "./Story";
import Benefits from "./Benefits";
import Team from "./Team";
import Footer from "./Footer";

const Main = () => {
  return (
    <section className="mainSection">
      <Welcome />
      <Story />
      <Benefits />
      <Team />
      <Footer />
    </section>
  );
};

export default Main;
