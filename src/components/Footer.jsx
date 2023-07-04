import { useState, useEffect } from "react";
import deliveryServicesData from "../data/deliveryServices.json";
import socialMediaData from "../data/socialMedia.json";

const Footer = () => {
  const [deliveryServices, setDeliveryServices] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    setDeliveryServices(deliveryServicesData);
    setSocialMedia(socialMediaData);
  }, []);

  return (
    <footer className="relative py-8 px-40 text-white flex justify-around bg-darkBrown">
      <div>
        <p className="font-medium">DELIVERY SERVICE</p>
        {deliveryServices.map(({ src, alt, url }, idx) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={idx}>
            <img src={require(`../assets/images/${src}`)} alt={alt}  className="w-16 rounded-lg my-3 mx-auto" />
          </a>
        ))}
      </div>
      <div className="w-80">
        <p className="font-medium flex justify-center">DOELazis Bakery</p>
        <p className="my-3 text-center text-sm">
          <a href="https://goo.gl/maps/KEZRRqsbLJ1n3P7D9" target="_blank" rel="noopener noreferrer">Jl. Komjen.Pol.M.Jasin No.7A, RW.9, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451</a>
        </p>
        <p className="my-3 text-center text-sm">
          <a href="mailto:doelazisbakery@gmail.com">doelazisbakery@gmail.com</a>
        </p>
      </div>
      <div>
        <p className="font-medium">STAY IN TOUCH</p>
        <div className="flex justify-center">
          {socialMedia.map(({ src, alt, url }, idx) => (
            <a href={url} target="_blank" rel="noopener noreferrer"  key={idx}>
              <img src={require(`../assets/images/${src}`)} alt={alt} className="w-6 my-3 mx-2" />
            </a>
          ))}
        </div>
      </div>
      <p className="absolute bottom-7 text-xs">&copy; 2023 Athiya & Aimar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;