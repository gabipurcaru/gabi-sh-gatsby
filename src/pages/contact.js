import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import * as icons from "react-icons/fa";
import { FaCopy, FaGlobe } from "react-icons/fa";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <div>
        <p>You can find me at <b>@gabipurcaru</b> just about anywhere.</p>

        <section className="text-gray-700 body-font">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap">
              <ContactCard icon="FaEnvelope" title="E-mail" link="gabi@purcaru.com" />
              <ContactCard icon="FaLinkedin" title="LinkedIn" link="https://www.linkedin.com/in/gabi-purcaru-267b6626/" />
              <ContactCard icon="FaGithub" title="GitHub" link="https://github.com/gabipurcaru" />
              <ContactCard icon="FaFacebook" title="Facebook" link="https://www.facebook.com/gabi.purcaru" />
              <ContactCard icon="FaKeybase" title="Keybase" link="https://keybase.io/gabipurcaru" />
              <ContactCard icon="FaTwitter" title="Twitter" link="https://twitter.com/gabipurcaru" />
            </div>
          </div>
        </section>
      </div>
    </Layout >
  );
}

// eslint-disable-next-line react/display-name
const ContactCard = ({ title, link, icon }) => {
  const IconComponent = icons[icon];

  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
      <div className="border border-gray-300 p-6 rounded-lg hover:bg-gray-100 h-full relative">
        <span className="inline-block align-middle">
          <IconComponent className="w-6 h-6 inline mr-2 text-green-700" />
          <span className="text-lg text-gray-900 font-medium title-font mb-2">{title}</span>
        </span>
        <div>
          <a className="break-all">
            {link}
          </a>
        </div>
        <div className="absolute right-0 bottom-0 mr-4 mb-4">
          <FaCopy className="text-blue-500 hover:text-blue-800 w-5 h-5 inline mr-2" />
          <FaGlobe className="text-blue-500 hover:text-blue-800 w-5 h-5 inline" />
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};


export default ContactPage;
