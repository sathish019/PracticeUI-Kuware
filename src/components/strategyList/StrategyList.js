import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

const StrategyList = () => {
  const mrktStrategyList = ["Brand loyalty", "Increased Sales", "Hypergrowth"];
  return (
    <>
      <div className="py-3">
        <h2 className="section-sub-header-left my-3">
          Our CMOs and Marketing Strategy Managers Deliver!
        </h2>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="4" lg="4" xl="4" className="">
              <ul className="approach-list">
                {mrktStrategyList.map((value) => (
                  <li>{value}</li>
                ))}
              </ul>
            </MDBCol>
            <MDBCol md="6" lg="6" xl="6" className="">
              <img src="https://kuware.com/wp-content/uploads/2019/05/kuware-digital-strategy-implementation-plan-to-achieve-hypergrowth-and-goals.svg" alt=""></img>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default StrategyList;
