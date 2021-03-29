import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

const HeaderSectionTwo = () => {
  const menuOptions = [
    {
      label: "Fractional CMOs",
      items: [
        {
          label: "Overview",
          command: () => { window.open("https://kuware.com/fractional-cmos/", "_blank"); },
        },
        {
          label: "Meet the CMOs",
          command: () => { window.open("https://kuware.com/about-us/about/", "_blank"); },
        },
      ],
    },
    {
      label: "eCommerce",
      command: () => { window.open("https://kuware.com/b2c-ecommerce-done-for-you-services/", "_blank"); },
    },
    {
      label: "LinkedIn Marketing",
      items: [
        {
          label: "Overview",
          command: () => { window.open("https://kuware.com/linkedin/marketing/", "_blank"); },
        },
        {
          label: "LinkedIn Prospecting: Profile Magnet",
          command: () => { window.open("https://kuware.com/linkedin/prospecting/profilemagnet/", "_blank"); },
        },
        {
          label: "LinkedIn Prospecting Book",
          command: () => { window.open("https://kuware.com/linkedin/prospecting/book/", "_blank"); },
        },
      ],
    },
    {
      label: "Drive Traffic and Conversion",
      items: [
        {
          label: "Overview",
          command: () => { window.open("https://kuware.com/digital-marketing/digital-marketing-overview/", "_blank"); },
        },
        {
          label: "Marketing Automation",
          command: () => { window.open("https://kuware.com/digital-marketing/marketing-automation-overview/", "_blank"); },
        },
        {
          label: "Development",
          command: () => { window.open("https://kuware.com/websites/website-design/", "_blank"); },
        },
        {
          label: "Content",
          command: () => { window.open("https://kuware.com/digital-marketing/content/", "_blank"); },
        },
        {
          label: "SEO",
          command: () => { window.open("https://kuware.com/digital-marketing/organic-seo/", "_blank"); },
        },
        {
          label: "Paid Search",
          command: () => { window.open("https://kuware.com/digital-marketing/pay-per-click-ppc/", "_blank"); },
        },
        {
          label: "Social",
          command: () => { window.open("https://kuware.com/digital-marketing/social-media-marketing/", "_blank"); },
        },
        {
          label: "Digital Marketing Training",
          command: () => { window.open("https://kuware.com/training/", "_blank"); },
        },
      ],
    },
    {
      label: "Blog",
      command: () => { window.open("https://kuware.com/blog/", "_blank"); },
    },
    {
      label: "About Us",
      items: [
        {
          label: "Meet the Team",
          command: () => { window.open("https://kuware.com/about-us/about/", "_blank"); },
        },
        {
          label: "Let's Chat",
          command: () => { window.open("https://kuware.com/about-us/about/#hs-chat-open", "_blank"); },
        },
        {
          label: "Join the Team",
          command: () => { window.open("https://kuware.com/about-us/join-the-team/", "_blank"); },
        },
      ],
    },
  ];

  const endSearchBox = (
    <span className="p-input-icon-right">
      <i className="pi pi-search" />
      <InputText type="text" />
    </span>
  );

  return (
    <>
      <nav className="">
        <div>
          <Menubar model={menuOptions} end={endSearchBox} />
        </div>
        <div></div>
      </nav>
    </>
  );
};

export default HeaderSectionTwo;
