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
    <nav className="sticky top-0 h-16 flex justify-center items-center px-20 bg-neutral-200 " style={{ backgroundColor: "#F8F5CD" }}>
      <img src={navLogo} alt="doelazis-navlogo" className="h-44 absolute left-0"  />
      <div>
        {pages.map(({ page, path }, idx) => {
          if (location.pathname === path) {
            return (
              <Link to={path} key={idx} className="mx-4 py-1 font-medium transition duration-300" style={{ borderBottom: "2px solid", borderBottomColor: "#2C110A" }}>
                {page}
              </Link>
            );
          } else {
            return (
              <Link to={path} key={idx} className="mx-4 py-1 text-slate-700 font-medium border-b-2 border-transparent hover:border-b-rose-950 transition duration-300">
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