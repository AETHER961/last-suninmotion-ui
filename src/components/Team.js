import React from "react";
import zalme from "../assets/zalme.png";

const Team = () => {
  return (
    <section className="teamSection px-2 position-relative">
      <div className="row m-0">
        <h1 className="teamTitle">The Team</h1>
        <span className="teamSubTitle">
          Lorem ipsum dolor sit amet. Ut repellendus.
        </span>
      </div>
      <div className="row m-0">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img src={zalme} alt="zalme" className="zalmeImage" />
          <p className="zalmeName mt-3">Member Name</p>
          <p className="zalmejob">Job Title</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img src={zalme} alt="zalme" className="zalmeImage" />
          <p className="zalmeName mt-3">Member Name</p>
          <p className="zalmejob">Job Title</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img src={zalme} alt="zalme" className="zalmeImage" />
          <p className="zalmeName mt-3">Member Name</p>
          <p className="zalmejob">Job Title</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
