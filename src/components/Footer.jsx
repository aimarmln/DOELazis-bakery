import goFood from "../assets/images/logo-gofood.jpg";
import grabFood from "../assets/images/logo-grab.jpg";
import shopeeFood from "../assets/images/logo-shopeefood.jpg";
import instagram from "../assets/images/instagram-logo.png";
import facebook from "../assets/images/facebook-logo.png";

const Footer = () => {
  const deliveryServices = [
    { 
      src: goFood, 
      alt: "go-food-logo", 
      url: "https://gofood.co.id/id/jakarta/restaurant/toko-roti-doelazis-bakery-depok-89e6078c-d589-447f-85a6-4bae61e7ffa2"},
    { 
      src: grabFood, 
      alt: "grab-food-logo",
      url: "https://food.grab.com/id/id/restaurant/doelazis-bakery-tugu-delivery/6-CZNYL3VCVBXEEE"
    },
    { 
      src: shopeeFood, 
      alt: "shopee-food-logo",
      url: "https://shopee.co.id/Doelazis-Bakery-Pizza-Bread-Roti-Sosis-i.3227094.1995996772?is_from_login=true"
    }
  ];

  const socialMedia = [
    { 
      src: instagram, 
      alt: "instagram-logo",
      url: "https://www.instagram.com/doelazisbakery/?hl=en"
    },
    { 
      src: facebook, 
      alt: "facebook-logo",
      url: "https://www.facebook.com/DOELazisbakery/"
    }
  ];

  return (
    <footer className="relative pt-12 pb-20 px-40 text-white flex justify-around" style={{ backgroundColor: "#1E1916" }}>
      <div>
        <p className="font-medium">DELIVERY SERVICE</p>
        {deliveryServices.map(({ src, alt, url }, idx) => (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} key={idx} className="w-20 rounded-lg my-4 mx-auto" />
          </a>
        ))}
      </div>
      <div className="w-80">
        <p className="font-medium flex justify-center">DOELazis Bakery</p>
        <p className="my-4 text-center">
          <a href="https://goo.gl/maps/KEZRRqsbLJ1n3P7D9" target="_blank" rel="noopener noreferrer">Jl. Komjen.Pol.M.Jasin No.7A, RW.9, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451</a>
        </p>
        <p className="my-4 text-center">
          <a href="mailto:doelazisbakery@gmail.com">doelazisbakery@gmail.com</a>
        </p>
      </div>
      <div>
        <p className="font-medium">STAY IN TOUCH</p>
        <div className="flex justify-center">
          {socialMedia.map(({ src, alt, url }, idx) => (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={alt} key={idx} className="w-8 my-4 mx-2" />
            </a>
          ))}
        </div>
      </div>
      <p className="absolute bottom-10 text-sm">&copy; 2023 Athiya & Aimar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;