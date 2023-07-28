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
    <footer className="relative py-9 text-white bg-darkBrown">
      <div className="max-w-[1200px] mx-auto px-5 md:flex md:justify-between">
        <div className="mb-6">
          <p className="font-medium text-cream">DELIVERY SERVICE</p>
          {deliveryServices.map(({ src, alt, url }, idx) => (
            <a href={url} target="_blank" rel="noopener noreferrer" key={idx}>
              <img src={require(`../assets/images/${src}`)} alt={alt}  className="w-16 rounded-lg md:mr-0 mt-3 md:block mr-3 inline" />
            </a>
          ))}
        </div>
        <div className="md:max-w-[400px] w-auto mb-6">
          <p className="font-medium text-cream">DOELazis Bakery</p>
          <p className="my-3 text-sm">
            <a href="https://goo.gl/maps/KEZRRqsbLJ1n3P7D9" target="_blank" rel="noopener noreferrer">Jl. Komjen.Pol.M.Jasin No.7A, RW.9, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451</a>
          </p>
          <p className="my-3 text-sm">
            <a href="mailto:doelazisbakery@gmail.com">doelazisbakery@gmail.com</a>
          </p>
        </div>
        <div className="mb-6">
          <p className="font-medium text-cream">STAY IN TOUCH</p>
          <div className="flex">
            {socialMedia.map(({ src, alt, url }, idx) => (
              <a href={url} target="_blank" rel="noopener noreferrer"  key={idx}>
                <img src={require(`../assets/images/${src}`)} alt={alt} className="w-6 my-3 mr-2" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="absolute bottom-5 md:left-[40%] left-5 text-xs">&copy; 2023 Athiya & Aimar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;