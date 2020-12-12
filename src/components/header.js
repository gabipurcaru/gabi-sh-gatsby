import React from "react";

function Header() {
  return (
    <header className="text-gray-700 body-font bg-green-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0" href="https://gabi.purcaru.com/">
          <span className="ml-3 text-2xl">Gabi Purcaru</span>
        </a>
        <span className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center justify-center text-2xl text-gray-700">
          Software Engineer
        </span>
        <span className="md:flex-1"></span>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
          <a className="mr-6 text-gray-800 hover:text-black">
            <svg className="w-5 h-5 inline md:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
            Contact
           </a>
          <a className="mr-6 text-gray-800 hover:text-black">
            <svg className="w-5 h-5 inline md:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
            Blog
          </a>
          <a className="mr-6 text-gray-800 hover:text-black">
            <svg className="w-5 h-5 inline md:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
