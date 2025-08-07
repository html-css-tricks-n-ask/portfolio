import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram
} from "react-icons/fa";
import { footerData } from "../lib/footerData";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram,
};

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-lg font-bold uppercase mb-2">
            {footerData.name}
          </h2>
          <p className="text-sm leading-relaxed">{footerData.description}</p>
        </div>

        <div className="flex flex-col md:items-end">
          <h2 className="text-lg font-bold uppercase mb-2">Social</h2>
          <div className="flex gap-4 text-xl">
            {footerData.socialLinks.map(({ icon, url }, index) => {
              const IconComponent = iconMap[icon];
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center">
        {footerData.copyright}{" "}
        <a
          href={footerData.website.url}
          className="text-purple-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerData.website.name}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
