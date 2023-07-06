import PageHeading from "../components/PageHeading";

const About = () => {
  const outlet = [
    { src: "for-about-page-1.jpg", alt: "pict-1" },
    { src: "for-about-page-2.jpg", alt: "pict-2" },
    { src: "for-about-page-3.jpg", alt: "pict-3" },
    { src: "for-about-page-4.jpg", alt: "pict-4" },
  ];

  return (
    <>
      <PageHeading text="About Us" />
      <div className="flex flex-wrap justify-center items-center">
        <p className="w-[500px] text-4xl mx-4 text-center mb-8 sm:text-center md:text-left bg-green rounded-lg p-10 text-cream"><span className="font-bold text-lightBrown">DOELazis Bakery</span> is where passion, expertise, and community converge to create exceptional artisanal bread</p>
        <p className="w-[500px] text-lg mx-4 md:text-left sm:text-justify text-justify">Our products have been crafted with unwavering dedication and a commitment to excellence, delighting bread enthusiasts with unparalleled flavor, texture, and the unmistakable aroma of artisanal mastery.</p>
      </div>
      <PageHeading text="Our Philosophy" />
      <div className="flex flex-row-reverse flex-wrap justify-center items-center">
        <p className="w-[500px] text-4xl mx-4 text-center mb-8 sm:text-center md:text-right bg-green rounded-lg p-10 text-cream">Handcrafted, Delightful and <span className="font-bold text-lightBrown">Authentic Bread</span></p>
        <p className="w-[500px] text-lg mx-4 md:text-left sm:text-justify text-justify">Our handcrafted, artisanal bread that delights with its authentic flavors. Experience the joy of breadmaking at Doelazis Bakery, where every loaf is meticulously crafted with dedication, bringing together the essence of wholesome ingredients and the artistry of a passionate people.</p>
      </div>
      {/* <div className="flex flex-wrap justify-evenly ">
        {outlet.map(({ src, alt }, idx) => (
          <img src={require(`../assets/images/${src}`)} alt={alt} key={idx} className="w-96" />
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center w-8/12 mx-auto mt-20 mb-40">
        {outlet.map(({ src, alt }, idx) => (
          <img src={require(`../assets/images/${src}`)} alt={alt} key={idx} className={`w-96 relative ${(idx + 1) % 2 === 0 ? " top-0 md:top-20" : ""}`} />
        ))}
      </div>
    </>
  );
}

export default About;