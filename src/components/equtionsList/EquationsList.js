import React from "react";

const EquationsList = () => {
  return (
    <>
      <div className="blackboard-container ft-white">
        <h2 className="section-header py-2 ft-white">
          Six Science of Marketing Equations
        </h2>
        <ul className="equation-list">
          <li>
            Hypergrowth = Profitable Product + Solid Strategy + Impeccable
            Implementation
          </li>
          <li>Marketing Spend {"<="} ( Sale Price – COGS – COS) x 80%</li>
          <li>
            Marketing ROI = (Sales Increase X Net Margin)/(Marketing Spend)
          </li>
          <li>
            Solid strategy + Impeccable implementation = Effective marketing
          </li>
          <li>
            Questionable Strategy + Impeccable implementation = Questionable
            marketing
          </li>
          <li>
            Solid strategy + Questionable implementation = Questionable
            marketing
          </li>
        </ul>
      </div>
    </>
  );
};

export default EquationsList;
