import React from "react";

// Components
import HeaderSeactionOne from "../../components/header/HeaderSectionOne";
import HeaderSectionTwo from "../../components/header/HeaderSectionTwo";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import StrategyList from "../../components/strategyList/StrategyList";
import ApproachList from "../../components/approachList/ApproachList";
import EquationsList from "../../components/equtionsList/EquationsList";
import TestimonyVideo from "../../components/testimonyVideo/TestimonyVideo";
import BrandsImpact from "../../components/brandsimpacted/BrandsImpact";
import TechPartners from "../../components/techpartners/TechPartners";
import Timeline from "../../components/timeline/Timeline";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-section-1">
          <div className="container">
            <HeaderSeactionOne />
          </div>
        </div>
        <div className="header-section-2">
          <div className="container">
            <HeaderSectionTwo />
          </div>
        </div>
      </div>
      <div className="container z-pt-6per">
        <HomeBanner />
      </div>
      <div className="timeline-container">
        <div className="container z-banner-ngtv">
          <StrategyList />
        </div>
      </div>
      <div className="container">
        <ApproachList />
      </div>
      <div className="timeline-container">
        <div className="container">
          <EquationsList />
        </div>
      </div>
      <div className="container">
        <TestimonyVideo />
      </div>
      <div className="timeline-container">
        <div className="container">
          <BrandsImpact />
        </div>
      </div>
      <div className="container">
        <TechPartners />
      </div>
      <div className="timeline-container">
        <div className="container">
          <Timeline />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
