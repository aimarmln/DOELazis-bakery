import { homeCards } from "../data/HomeCards";
import doel from "../assets/images/doelazis-bakery-home.png";

const HomeCard = () => {
    return (
        <homecard>
            <div class='bg-no-repeat bg-cover w-full relative content-center bg-brokenWhite p-6' >
                <div className='text-center'>
                    <img class='m-auto my-10 h-14 mb-4' src={doel} alt='doel'/> 
                    <h2 class="font-satisfy text-5xl tracking-tight mb-10 text-lightBrown">delivering the best for everyone</h2>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center gap-2 mx-24 my-10 p-2'>
                    {homeCards.map(({ cover, alt, desc }, idx) => (
                        <div className='text-center text-lg' key={idx}>
                            <img class='h-32 m-auto my-12 hover:scale-110 drop-shadow-lg transition duration-300 ease-in-out' src={require(`../assets/images/${cover}`)} alt={alt}/>
                            <label class='box border-t-4 border-dustyBrown pt-4 my-6 font-semibold text-lg'>{desc}</label>   
                        </div>
                    ))}
                </div>
            </div>
        </homecard>
    ) 
}

export default HomeCard
