const HeroSection = ({ wallpaper, upperText, bottomText }) => {
  return (
    <section id="hero">
        <div class="grid bg-no-repeat bg-fixed bg-cover w-full h-2/3vh relative content-center" style={{ backgroundImage: `url(${wallpaper})` }}>
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}>
            <div class="flex justify-center items-center h-full">
                <div class="text-center text-slate-50">
                    <h2 class="font-satisfy text-6xl tracking-tight mb-12">{upperText}<br /><span>{bottomText}</span></h2>                  
                </div>
            </div>
            </div>
        </div>
    </section>
    );
}

export default HeroSection;
