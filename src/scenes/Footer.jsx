import React from "react";
import SocialIcons from "./SocialIcons";
import Item from "./Item";
import { CONTACT, ABOUT_US, TERMS_OF_USE } from "./Menus";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-[#31C48D]  mt-[350px]">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-20  text-sm pb-2">
        <span className="">
          <Item Links={CONTACT} title="CONTACT" />
        </span>
        <span>
          <Item Links={ABOUT_US} title="ABOUT US" />
        </span>
        <span>
          <Item Links={TERMS_OF_USE} title="TERMS OF USE" />
        </span>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-sm pb-8"></div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-sm pb-8"></div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-sm pb-8">
        <span>© 2023 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
