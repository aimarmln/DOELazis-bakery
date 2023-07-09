import wallpaper from "../assets/images/wallpaper.jpg";

const HeroSection = () => {
  return (
    <herosection>
        <div class="grid bg-no-repeat bg-cover w-full h-screen relative content-center" style={{backgroundImage: `url(${wallpaper})`}}>
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: `rgba(0, 0, 0, 0.5)`}}>
            <div class="flex justify-center items-center h-full">
                <div class="text-center text-slate-50">
                    <h2 class="font-satisfy text-3xl md: text-5xl xl: text-5xl tracking-tight mb-12">Indulge in the art <br /><span>of Flavorful Delights</span></h2>                  
                </div>
            </div>
            </div>
        </div>
    </herosection>
    );
}

export default HeroSection;
