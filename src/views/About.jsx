import HeroSection from "../components/HeroSection";
import PageHeading from "../components/PageHeading";
import Map from "../components/Map";
import AboutComponent from "../components/AboutComponent";
import wallpaper from "../assets/images/wallpaper-3.jpg"

const About = () => {
  const outlet = [
    { src: "for-about-page-1.jpg", alt: "pict-1" },
    { src: "for-about-page-2.jpg", alt: "pict-2" },
    { src: "for-about-page-3.jpg", alt: "pict-3" },
    { src: "for-about-page-4.jpg", alt: "pict-4" },
  ];

  const about = [
    { 
      highlight: "DOELazis Bakery",
      main: "DOELazis Bakery is where passion, expertise, and community converge to create exceptional artisanal bread",
      desc: "Our products have been crafted with unwavering dedication and a commitment to excellence, delighting bread enthusiasts with unparalleled flavor, texture, and the unmistakable aroma of artisanal mastery.",
      isLefty: true
    },
    {
      highlight: "Authentic Bread",
      main: "Handcrafted, Delightful, and Authentic Bread",
      desc: "Our handcrafted, artisanal bread that delights with its authentic flavors. Experience the joy of breadmaking at Doelazis Bakery, where every loaf is meticulously crafted with dedication, bringing together the essence of wholesome ingredients and the artistry of a passionate people.",
      isLefty: false
    }
  ];

  return (
    <section id="about">
      <HeroSection wallpaper={wallpaper} upperText="Baking Blissful Moments," bottomText="One Delightful Bite at a Time!" />
      <div className="max-w-[1200px] mx-auto px-5">
        <PageHeading text="About Us" />
        <AboutComponent {...about[0]} />
        <PageHeading text="Our Philosophy" />
        <AboutComponent {...about[1]} />
        <iframe src="https://www.youtube.com/embed/QDKUkPSw3yA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mx-auto my-20 w-full h-[473px] md:w-[1160px] md:h-[653px]" allowfullscreen></iframe>
        <Map />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mx-auto mt-20 mb-20 md:mb-40 w-full md:w-[1160px]">
          {outlet.map(({ src, alt }, idx) => (
            <img src={require(`../assets/images/${src}`)} alt={alt} key={idx} className={`${idx % 2 === 1 ? "relative top-0 md:top-20" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;