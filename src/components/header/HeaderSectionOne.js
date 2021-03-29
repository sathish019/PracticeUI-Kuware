import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { FaPhoneAlt } from "react-icons/fa";

const HeaderSectionOne = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3" lg="3" xl="3" className="header-logo">
            <a href="https://kuware.com">
              <img
                src="http://kuware.com/wp-content/uploads/2019/01/KUWARE-LOGO.png"
                alt=""
              ></img>
            </a>
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3" className="z-ft-sans">
            Science of Marketing <sup>®</sup>
          </MDBCol>
          <MDBCol md="6" lg="6" xl="6" className="header-contact-section">
            <ul className="z-ul-contact">
              <li className="mr-5">
                <FaPhoneAlt />
                <span>+1-512-364-0165</span>
              </li>
              <li>
                <a href="https://kuware.com/#hs-chat-open" alt="" target="_blank">
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default HeaderSectionOne;
