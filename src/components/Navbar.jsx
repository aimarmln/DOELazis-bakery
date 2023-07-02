import { Link, useLocation } from "react-router-dom";
import navLogo from "../Assets/Images/doelazis-bakery.png"

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
      <img src={navLogo} alt="doelazis-navlogo" className="h-44 absolute left-9"  />
      <div>
        {pages.map(({ page, path }, idx) => {
          let style = "";

          if (location.pathname === path) {
            style = "rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-100 text-slate-900 transition duration-200";
          } else {
            style = "rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 transition duration-200";
          }

          return (
            <Link to={path} key={idx} className={style}>
              {page}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;