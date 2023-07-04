import { Link, useLocation } from "react-router-dom";
import navLogo from "../assets/images/doelazis-bakery.png"

const Navbar = () => {
  const pages = [
    { page: "Home", path: "/" },
    { page: "About", path: "/about" },
    { page: "Menu", path: "/menu" },
    { page: "Contact", path: "/contact" }
  ];

  const location = useLocation();
  
  return (
    <nav className="sticky top-0 h-16 flex justify-center items-center px-20 bg-cream" >
      <img src={navLogo} alt="doelazis-navlogo" className="h-44 absolute left-0"  />
      <div>
        {pages.map(({ page, path }, idx) => {
          if (location.pathname === path) {
            return (
              <Link to={path} key={idx} className="mx-4 py-1 text-darkBrown font-medium border-b-2 border-b-darkBrown transition duration-250">
                {page}
              </Link>
            );
          } else {
            return (
              <Link to={path} key={idx} className="mx-4 py-1 text-slate-700 font-medium border-b-2 border-transparent hover:text-darkBrown hover:border-b-darkBrown transition duration-250">
                {page}
              </Link>
            );
          }
        })}
      </div>
    </nav>
  );
}

export default Navbar;