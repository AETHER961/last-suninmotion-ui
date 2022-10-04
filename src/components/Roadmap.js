import React from "react";

const Roadmap = () => {
  return (
    <section id="roadmapSection" className="roadmapSection my-page-section">
      <h1 className="benefitsTitle">Road Map</h1>
      <span className="benefitsSubTitle">A journey lit by Solim.</span>
      <div id="roadmap" className="wrapper my-pagination-section hiveBg">
        <div className="center-line"></div>
        <div className="row row-2">
          <section className="ps-md-5">
            <div className="icon">Q1</div>
            <div className="details">
              <span className="roadDate">February 16, 2023</span>
              <div className="roadTitle">First Quarter</div>
            </div>
            <p className="roadDesc">
              Launch the Solim NFT and give our community the chance to Mint a
              one of a kind NFT that will give them access to exciting Prizes,
              Tokens, Events and residual income from the sustainable projects
              built by the SOLIM Project and later on a P2E game.
            </p>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <div className="icon">Q2</div>
            <div className="detailss">
              <span className="roadDate">April 16, 2023</span>
              <div className="roadTitle">Second Quarter</div>
            </div>
            <p className="roadDesc">
              Build our first Solar PV projects that will enable holders of the
              SOLIM NFT to receive a residual income monthly and also donate 20%
              of the SOLIM project proceeds to build charitable projects for
              countries facing fuel poverty in order to ensure thy have access
              to clean and reliable energy. We will target schools, Hospitals
              and any other infrastructure necessary to ensure these communities
              are protected.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <section className="ps-md-5">
            <div className="icon">Q3</div>
            <div className="details">
              <span className="roadDate">July 16, 2023</span>
              <div className="roadTitle">Third Quarter</div>
            </div>
            <p className="roadDesc">
              Begin development of the Exclusive open world P2E game that will
              capture the true essence of the SOLIM project connecting the
              community to the real projects built by the SOLIM project in the
              metaverse.
            </p>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <div className="icon">Q4</div>
            <div className="detailss">
              <span className="roadDate">October 16, 2023</span>
              <div className="roadTitle">Fourth Quarter</div>
            </div>
            <p className="roadDesc">
              Will see the mint of the next generation of SOLIM NFTs that will
              bring increased residual income from Projects built by the SOLIM
              project to holders of the NFT and continue to donate significant
              proceeds to the charitable foundations we will be partnering with.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
