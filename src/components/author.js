import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { StaticImage } from 'gatsby-plugin-image';

export default function Author() {
  return (
    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
      <StaticImage className="flex-shrink-0 rounded-full w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="../images/gabi-face.jpg" alt="Gabi Purcaru" />
      <div className="flex-grow sm:pl-8">
        <h2 className="title-font font-medium text-lg text-gray-900">Gabi Purcaru</h2>
        <h3 className="text-gray-500 font-light">Software Engineer</h3>
        <p className="text-gray-500 text-sm mb-1">London, UK</p>
        <span className="inline-flex">
          <a href="https://www.linkedin.com/in/gabi-purcaru-267b6626/" className="text-gray-500 hover:text-gray-800">
            <FaLinkedin />
          </a>
          <a href="mailto:gabi@purcaru.com" className="ml-2 text-gray-500 hover:text-gray-800">
            <FaEnvelope />
          </a>
        </span>
      </div>
    </div>
  );
}