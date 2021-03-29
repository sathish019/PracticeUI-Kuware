import React from "react";
import { Timeline as TimeLineContent } from "primereact/timeline";

const Timeline = () => {
  let weekdayName = () => {
    var d = new Date();
    var weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var day = weekday[d.getDay()];
    return day;
  };
  const events = [
    {
      year: "2008",
      event:
        "eCommerce: Learnt by doing it. Selling Shrinkwrap Software and unbranded Hardware on Website and Amazon. We were ranked Number One seller in Category on Amazon. Remember, Zen Cart, anybody?",
    },
    {
      year: "2009",
      event: "Marketing, eCommerce Websites: Partnered with Vendors in India.",
    },
    {
      year: "2010",
      event: "Social Media Marketing Services added.",
    },
    {
      year: "2011",
      event:
        "Developed Web Apps. Dedicated Fully Managed Websites for Customers.",
    },
    {
      year: "2012",
      event: "Android and iOS Mobile Apps Development started.",
    },
    {
      year: "2013",
      event: "In-house Team set up in India.",
    },
    {
      year: "2014",
      event:
        "Became Full Service Digital Agency for Agencies and select Clients.",
    },
    {
      year: "2015",
      event: "Custom Data Mining Tools for Digital Marketing and Social Media.",
    },
    {
      year: "2016",
      event:
        "Digital Strategy and Implementation Partner with ROI based guaranteed results.",
    },
    {
      year: "2017",
      event:
        "Fractional Chief Marketing Officers to provide marketing strategy and manage implementation.",
    },
    {
      year: "2018",
      event: "8	Book Published: Turning LinkedIn into Money",
    },
    {
      year: "2019",
      event:
        "<b> eCommerce Done-for-You </b> (BazaarPros.com): Design, Dev, CRO, CVJO, Mangement, Marketing & Advertising for your online store.",
    },
    {
      year: "2020",
      event:
        "Launched Tiktok Marketing & Advertising services for eCommerce:  tiktokpros.com",
    },
  ];

  const customizedMarker = (item) => {
    return (
      <span className="custom-marker p-shadow-2">
        <span className="">{item.year}</span>
      </span>
    );
  };

  const customizedContent = (item) => {
    if (item.year === "2019") {
      return (
        <div>
          {" "}
          <strong className="ft-weight-none">
            {" "}
            eCommerce Done-for-You{" "}
          </strong> ({" "}
          <a
            className="external-url"
            href="https://bazaarpros.com/"
            target="_blank"
          >
            BazaarPros.com
          </a>{" "}
          ): Design, Dev, CRO, CVJO, Mangement, Marketing & Advertising for your
          online store.
        </div>
      );
    } else if (item.year === "2020") {
      return (
        <div>
          Launched
          <strong className="ft-weight-none">
            {" "}
            Tiktok Marketing & Advertising services{" "}
          </strong>
          for eCommerce:{" "}
          <a
            className="external-url"
            href="https://tiktokpros.com/"
            target="_blank"
          >
            tiktokpros.com
          </a>
        </div>
      );
    } else {
      return <span>{item.event}</span>;
    }
  };

  return (
    <>
      <h2 className="timeline-header py-5">
        KUWARE <sup>®</sup>Timeline
      </h2>
      <div className="timeline-demo">
        <TimeLineContent
          className="customized-timeline"
          value={events}
          marker={customizedMarker}
          /* content={(item) => item.event} */
          content={customizedContent}
        />
      </div>
      <div className="below-timeline mt-2 pt-2 pb-5">Enjoy your {weekdayName()}!</div>
    </>
  );
};

export default Timeline;
