import { Link, useLocation } from "react-router-dom";
import navLogo from "../assets/images/doelazis-bakery.png"
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation(); 

  const pages = [
    { page: "Home", path: "/" },
    { page: "About", path: "/about" },
    { page: "Menu", path: "/menu" },
    { page: "Contact", path: "/contact" }
  ];
  
  return (
    <nav id="nav" className="sticky z-10 top-0 p-4 h-20 bg-cream flex items-center md:justify-center flex items-center">
      <div className="flex justify-between items-center">
        <div className="absolute left-0">
          <img src={navLogo} alt="doelazis-nav" className="w-52" />
        </div>
        <div className="absolute right-4 md:hidden">
          <button
            className="p-2 text-darkBrown rounded-md outline-none hover:bg-lightBrown/40 focus:bg-dustyBrown focus:text-cream transition-all"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <ul className={`md:flex md:items-center absolute md:static z-[-1] md:z-auto bg-cream/95 md:bg-cream left-0 right-0 text-center md:w-auto py-4 md:py-0 pl-7 md:pl-0 md:opacity-100 top-[-400px] transition-all duration-500 ${navbar ? "top-[80px] opacity-100 border-b-1 border-b-dustyBrown shadow-md shadow-dustyBrown ease-out" : "ease-in"}`}>
        {pages.map(({ page, path }, idx) => {
          if (location.pathname === path) {
            return (
              <li className={`md:my-0 ${idx === 1 ? "my-0" : "my-6"}`}>
                <Link to={path} key={idx} className="mx-5 py-1 text-darkBrown font-medium border-b-2 border-b-darkBrown transition duration-250" onClick={() => setNavbar(false)}>
                  {page}
                </Link>
              </li>
            );
          } else {
            return (
              <li className="my-6 md:my-0">
                <Link to={path} key={idx} className="mx-5 py-1 text-slate-700 font-medium border-b-2 border-transparent hover:text-darkBrown hover:border-b-darkBrown transition duration-250" onClick={() => setNavbar(false)}>
                  {page}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
    );
}

export default Navbar;