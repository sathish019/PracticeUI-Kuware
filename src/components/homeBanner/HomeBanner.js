import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

const HomeBanner = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="5" lg="5" xl="5" className="">
            <div className="banner-card1">
              <h2>Seeking growth in the new digital world?</h2>  
            </div>
            <img src="https://kuware.com/wp-content/uploads/2019/05/kuware-unhappy-B2B-professional-with-no-marketing-plan-no-leads-desktop-no-cloud.svg" alt=""></img>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="">
            <div className="banner-divider">
              <img className="white-divider" src="https://kuware.com/wp-content/uploads/2019/05/kuware-divider.svg" alt=""></img>
              <div className="blue-arrow-img">
               <img src="https://kuware.com/wp-content/uploads/2019/05/blue-arrow-right.png" alt=""></img>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="5" lg="5" xl="5" className="">
            <div className="banner-card2">
              <h2>Hypergrowth delivered through the Science of Marketing <sup>™</sup></h2>  
            </div>
            <img src="https://kuware.com/wp-content/uploads/2019/05/kuware-happy-B2B-professional-with-marketing-plan-and-good-leads-no-cloud.svg" alt=""></img>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default HomeBanner;
