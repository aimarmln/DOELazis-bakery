import FavMenu from "../components/FavMenu";
import HeroSection from "../components/HeroSection";
import HomeCard from "../components/HomeCard";
import wallpaper from "../assets/images/wallpaper.jpg";

const Home = () => {
  return (
    <>
      <HeroSection wallpaper={wallpaper} upperText="Indulge in the art" bottomText="of Flavorful Delights" />
      <HomeCard /> 
      <FavMenu />
    </>
  );
}

export default Home;