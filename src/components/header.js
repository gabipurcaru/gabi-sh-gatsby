import React from "react";

function Header() {
  return (
    <header className="text-gray-700 body-font bg-green-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://gabi.purcaru.com/">
          <span className="ml-3 text-2xl">Gabi Purcaru</span>
        </a>
        <span className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center justify-center text-2xl text-gray-600">
          Software Engineer
        </span>
      </div>
    </header>
  );
}

export default Header;
