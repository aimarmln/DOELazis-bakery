import { homeCards } from "../data/HomeCards";
import doel from "../assets/images/doelazis-bakery-home.png";

const HomeCard = () => {
    return (
        <homecard>
            <div class='bg-no-repeat bg-cover w-full h-screen relative content-center bg-brokenWhite' >
                <div className='text-center'>
                    <img class='m-auto h-14 mb-4' src={doel} alt=''/> 
                    <h2 class="font-satisfy text-5xl tracking-tight mb-12 text-lightBrown">delivering the best for everyone</h2>
                </div>

                <div className='grid grid-cols-4 gap-2 mx-24 my-auto justify center' grid={{gutter: 16, xs: 1, sm:2, md:4, lg:4, xl:3, xxl:3}}>
                    {homeCards.map((items, index) => (
                        <div className='text-center text-sm' key={index}>
                            <img class='h-20 m-auto my-12 hover:scale-150 drop-shadow-lg transition duration-300 ease-in-out' src={require(`../assets/images/${items.cover}`)} alt={items.alt}/>
                            <label class='box border-t-4 border-dustyBrown pt-4 my-6'>{items.desc}</label>   
                        </div>
                    ))}
                </div>
            </div>
        </homecard>
    ) 
}

export default HomeCard
