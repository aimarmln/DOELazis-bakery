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
    <>
      <PageHeading text="Our Breads" />
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-y-16 mb-12 my-12 mx-52">
        {breads.map(({breadName, desc, price, src, alt }, idx) => (
          <BreadCard breadName={breadName.toUpperCase()} desc={desc} price={price} src={src} alt={alt} key={idx} />
        ))}
      </div>
    </>
  );
}

export default Menu;