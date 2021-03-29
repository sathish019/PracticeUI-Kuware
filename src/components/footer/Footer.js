import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// components 
import ChatBox from "../chatbox/ChatBox";

const Footer = () => {
  return (
    <>
      <div>
        <MDBFooter className="z-footer1 font-small pt-4">
          <MDBContainer className="text-center text-md-left">
            <MDBRow className="text-center text-md-left mt-3 pb-3">
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                <div className="d-flex">
                  <div>
                    <a
                      title="Kuware Incorporated BBB Business Review"
                      href="https://www.bbb.org/us/tx/austin/profile/digital-marketing/kuware-incorporated-0825-90074677#bbbonlineclick"
                      target="_blank"
                    >
                      <img src="http://kuware.com/wp-content/uploads/2019/01/black-seal-20190131.png" alt=""></img>
                    </a>
                  </div>
                  <div className="text-center mx-auto z-ext-url-uline">
                    <a
                      title="Kuware Incorporated BBB Business Review"
                      href="https://www.bbb.org/us/tx/austin/profile/digital-marketing/kuware-incorporated-0825-90074677#bbbonlineclick"
                      target="_blank"
                    >
                      <span className="ft-20p">
                        <strong>BBB</strong>
                      </span>
                      <br />
                      <span className="ft-20p">
                        <strong>Rating:</strong>
                      </span>
                      <br />
                      <span className="ft-20p">
                        <strong>A+</strong>
                      </span>
                      <br />
                      <span>as of 03/28/2021</span>
                      <br />
                      <span>Click for Review</span>
                    </a>
                  </div>
                </div>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                <ul className="social-profiles">
                  <li>
                    <a
                      title="Facebook"
                      href="https://www.facebook.com/kuware.inc"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      title="Twitter"
                      href="https://www.twitter.com/kuware"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      title="Linkedin"
                      href="https://www.linkedin.com/company/kuware.inc/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      title="Instagram"
                      href="https://www.instagram.com/kuware.inc/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>

                <p className="text-center">
                  <a className="z-ext-url-uline" href="https://kuware.com/privacy-notice/" target="_blank">
                    Privacy Notice
                  </a>
                </p>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="4" lg="3" xl="3" className="mx-auto z-ft-left">
                <h3 className="my-2">Contact Us</h3>
                <p>
                  <FaMapMarkerAlt className="z-icon-pos"/> 260 ADDIE ROY RD STE
                  130
                </p>
                <p className="z-ml-34p">Austin, Texas</p>
                <p className="z-ml-34p">USA 78746</p>
                <p>
                  <FaPhoneAlt className="z-icon-pos"/> Austin Direct:
                  <a className="z-ext-url-uline" href="#!">
                    {" "}
                    +1-512-364-0165
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>

        <MDBFooter className="z-footer2 font-small py-3">
          <div className="d-flex justify-content-center">
            © KUWARE <sup>® </sup> INC. All rights reserved.
          </div>
        </MDBFooter>

        <div className="z-chat-btn">
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default Footer;
