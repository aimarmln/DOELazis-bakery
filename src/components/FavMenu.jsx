import { favBread } from "../data/FavBreads";
import bookmark from "../assets/images/fav1.png";

const FavMenu = () => {
    return (
        <favmenu>
            <div class='bg-no-repeat bg-cover w-full content-center p-8 relative' style={{ backgroundColor: "#605a44" }}>
                <h1 className="text-center text-2xl my-10 text-brokenWhite">
                    <strong>THE ALL TIME FAVORITES</strong> 
                </h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 justify-items-center gap-4 mx-24 my-10 text-center text-brokenWhite'>
                    {favBread.map((item, index) => (
                        <div className='box border-t-4 border-gold shadow-lg' key={index}>
                            <img class ='w-14 absolute' src ={bookmark} alt='bookmark'/>    
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <img class="h-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 my-10 mb-15" src={require(`../assets/images/${item.src}`)} alt={item.alt} />
                                
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darkBrown group-hover:from-darkBrown/70 group-hover:via-darkBrown/60 group-hover:to-darkBrown/70"></div>
                                    <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <h1 class="text-lg font-medium text-white">{item.name}</h1>
                                        <p class="mb-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.desc}</p>
                                        <button class="rounded-full bg-darkBrown py-2 px-3.5 text-sm capitalize text-brokenWhite shadow shadow-black/60">See More</button>
                                    </div>
                                </div>
                            </div>
                    ))} 
                </div>
            </div> 
        </favmenu>
    ) 
}

export default FavMenu