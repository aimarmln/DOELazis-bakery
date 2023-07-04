import { useState, useEffect } from "react";
import BreadCard from "../components/BreadCard";
import breadsData from "../data/breads.json"

const Menu = () => {
  const [breads, setBreads] = useState([]) ;

  useEffect(() => {
    setBreads(breadsData);
  }, []);
  
  return (
    <>
      <h1 className="text-center text-2xl my-12">
        <strong>OUR BREADS</strong> 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-y-16 mb-12 px-40">
        {breads.map(({breadName, desc, price, src, alt }, idx) => (
          <BreadCard breadName={breadName.toUpperCase()} desc={desc} price={price} src={src} alt={alt} key={idx} />
        ))}
      </div>
    </>
  );
}

export default Menu;