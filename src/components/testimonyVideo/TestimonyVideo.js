import React from "react";
import { FaRegCommentDots } from 'react-icons/fa';


const TestimonyVideo = () => {
  return (
    <>
      <h2 className="section-header py-5">What Our Clients Are Saying</h2>
      <p>
        <img
          className="w-100"
          src="https://embed-fastly.wistia.com/deliveries/31139184190f468f17763d2eb1f3f0e9.webp?image_crop_resized=1280x720"
        ></img>
      </p>
      <div className="my-5 d-flex justify-content-center">
        <a className="more-testimony" href="https://kuware.com/what-our-clients-are-saying/" target="_blank">         
          <FaRegCommentDots/>
          <span> And there is more...</span>
        </a>
      </div>
    </>
  );
};

export default TestimonyVideo;
