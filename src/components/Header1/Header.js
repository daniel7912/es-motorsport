import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { MdClearAll } from "react-icons/md";
// import ThemeToggle from "./ThemeToggler"

import "./Header.css";

const Header = ({ toggleMenu }) => {
  // const { contactDetails, instagramURL, facebookURL } = useSiteMetadata()
  const contactDetails = null;
  const instagramURL = null;
  const facebookURL = null;

  return (
    <div className="navbar flex border-b border-gray-300">
      <div className="nav-left site-logo pl-4 md:pl-8 text-xl sm:text-2xl md:text-3xl uppercase font-semibold flex-grow self-center">
        <span className="text-yellow-400">ES</span>Motorsport
      </div>
      <div className="nav-right flex">
        {contactDetails && contactDetails.phone && (
          <a
            href={`tel:${contactDetails.phone.tel}`}
            className="phone-number hidden sm:block self-center border-r border-gray-300 py-2 pr-6 mr-4"
          >
            {contactDetails.phone.display}
          </a>
        )}
        {instagramURL && (
          <a
            href={instagramURL}
            target="_blank"
            rel="noreferrer"
            className="nav-link hidden xs:block self-center"
          >
            <FiInstagram className="text-brands-instagram" />
          </a>
        )}
        {facebookURL && (
          <a
            href={facebookURL}
            target="_blank"
            rel="noreferrer"
            className="nav-link hidden xs:block self-center"
          >
            <FaFacebookF className="text-brands-facebook" />
          </a>
        )}
        <button
          className="menu-toggle bg-gray-800 outline-none focus:shadow-outline text-white"
          onClick={toggleMenu}
        >
          {}
          <MdClearAll className="mx-auto" />
        </button>
      </div>

      {/* <ThemeToggle /> */}
    </div>
  );
};

export default Header;
