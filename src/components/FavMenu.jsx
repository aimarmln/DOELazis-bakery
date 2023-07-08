import { favBread } from "../data/FavBreads";
import bookmark from "../assets/images/fav1.png";
import React, { useState } from 'react';

const FavMenu = () => {
    const [showDescription, setShowDescription] = useState(false);

    const handleMouseEnter = () => {
        setShowDescription(true);
    };

    const handleMouseLeave = () => {
        setShowDescription(false);
    };

    return (
        <favmenu>
            <div class='bg-no-repeat bg-cover w-full h-screen relative content-center' style={{ backgroundColor: "#605a44" }}>
                <h1 className="text-center text-2xl my-12 text-brokenWhite">
                    <strong>THE ALL TIME FAVORITES</strong> 
                </h1>

                <div className='grid grid-cols-3 gap-4 mx-24 text-center text-brokenWhite'>
                    {favBread.map((item, index) => (
                        <div className='relative overflow-hidden box border-4 border-gold' key={index}>
                            <img class ='w-14 absolute' src ={bookmark} alt='bookmark'/>    
        
                            <h1 class='text-lg font-medium p-4'>{item.name}</h1>
                            
                            <div class='relative rounded-lg overflow-hidden shadow-md' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <img class='w-48 m-auto my-12' src={require(`../assets/images/${item.src}`)} alt={item.alt}/>
                                {showDescription && (
                                <div className="bottom-0 left-0 right-0 p-4 bg-brokenWhite text-gray-800 transition-all duration-100 ease-in-out">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="mt-2">{item.desc}</p>
                                </div>
                            )}

                            </div>
            
                            </div>
                        ))}  
                </div>
            </div> 
        </favmenu>
    ) 
}

export default FavMenu