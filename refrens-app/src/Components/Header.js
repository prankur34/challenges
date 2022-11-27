import React from "react";

function Header() {
  return (
    <div>
      <header
        role="heading"
        aria-describedby="heading-1"
        className="text-white body-font bg-gray-800"
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span id="heading-1" className="ml-3 text-xl">
              Refrens
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
