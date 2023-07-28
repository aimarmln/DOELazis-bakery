import { favBreads } from "../data/FavBreads";
import bookmark from "../assets/images/fav3.png";
import { Link } from "react-router-dom";

const FavMenu = () => {
    return (
        <section className="bg-dustyBrown">
            <div class='max-w-[1200px] mx-auto px-5 p-8 relative'>
                <h1 className="text-center text-2xl my-5 text-brokenWhite">
                    <strong>THE ALL TIME FAVORITES</strong> 
                </h1>

                <div className='flex flex-col justify-center items-center md:justify-between md:flex-row my-10 text-center text-brokenWhite'>
                    {favBreads.map((item, index) => (
                        <div className='relative box border-t-4 border-cream shadow-lg rounded-xl w-[340px] md:mb-0 mb-12' key={index}>
                            <img class ='w-14 left-4 md:left-0 lg:1/12 absolute z-10' src ={bookmark} alt='bookmark'/>

                            <div class="group rounded-xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-darkBrown/30">
                                <h1 class="text-md font-medium text-white m-4">{item.name}</h1>
                                <img class="w-5/6 mx-auto object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 my-10 mb-15" src={require(`../assets/images/${item.src}`)} alt={item.alt} />
                                
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darkBrown group-hover:from-darkBrown/70 group-hover:via-darkBrown/60 group-hover:to-darkBrown/70"></div>
                                    <div class="absolute inset-0 flex translate-y-90 flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <p class="mb-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                    ))} 
                </div>
                <div className="text-center content-center mb-5">
                    <Link to="/Menu" className="inline-block px-7 py-3 mr-1.5 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">
                        Our Menu
                    </Link>
                </div>
            </div> 
        </section>
    ) 
}

export default FavMenu