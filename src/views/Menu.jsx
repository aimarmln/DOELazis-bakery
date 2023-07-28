import { useState, useEffect } from "react";
import BreadCard from "../components/BreadCard";
import breadsData from "../data/breads.json"
import PageHeading from "../components/PageHeading";

const Menu = () => {
  const [breads, setBreads] = useState([]) ;

  useEffect(() => {
    setBreads(breadsData);
  }, []);
  
  return (
    <section id="menu" className="mb-12">
      <div className="max-w-[1200px] mx-auto px-5">   
        <PageHeading text="Our Breads" />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-x-52 gap-y-28">
          {breads.map(({ breadName, desc, price, src, alt }, idx) => (
            <BreadCard breadName={breadName.toUpperCase()} desc={desc} price={price} src={src} alt={alt} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;