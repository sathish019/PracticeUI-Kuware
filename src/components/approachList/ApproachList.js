import React from "react";

const ApproachList = () => {
  const listValues = [
    "DASH™ : Discovery, Analysis & Strategy Highlights",
    "Marketing Strategy",
    "Marketing Systems Setup",
    "Marketing Management",
  ];

  return (
    <>
      <div className="my-5">
        <h2 className="section-header-left">How do we do it?</h2>
        <h2 className="section-sub-header-left my-3">
          A systematic scientific approach to marketing:
        </h2>
        <ul className="approach-list">
          {listValues.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ApproachList;
