import { homeCards } from "../data/HomeCards";
import doel from "../assets/images/doelazis-bakery-home.png";

const HomeCard = () => {
    return (
        <section id="bg-brokenWhite">
            <div class='max-w-[1200px] mx-auto px-5 relative content-center p-6' >
                <div className='text-center'>
                    <img class='m-auto my-10 h-14 mb-4' src={doel} alt='doel'/> 
                    <h2 class="font-satisfy text-5xl tracking-tight mb-10 text-lightBrown">delivering the best for everyone</h2>
                </div>

                <div className='flex flex-col justify-center items-center md:justify-between md:flex-row gap-2 my-10 py-2'>
                    {homeCards.map(({ cover, alt, desc }, idx) => (
                        <div className='text-center md:w-40 w-52' key={idx}>
                            <img class='mt-12 mb-4 hover:scale-110 drop-shadow-lg transition duration-300 ease-in-out' src={require(`../assets/images/${cover}`)} alt={alt}/>
                            <div className="w-full h-[4px] bg-dustyBrown mb-4"></div>
                            <label class='box my-6 font-semibold text-lg text-center'>{desc}</label>   
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ) 
}

export default HomeCard
