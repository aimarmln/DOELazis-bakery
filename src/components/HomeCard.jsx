import bakery from "../assets/images/carde-bakery-shop.png"
import baker from "../assets/images/card-baker.png"
import bake from "../assets/images/card-baking.png"
import ing from "../assets/images/card-ingredient.png"
import doel from "../assets/images/doelazis-bakery-home.png"

const homecards = [
    {
        cover: ing,
        desc: "high-quality ingredients",
    },
    {
        cover: baker,
        desc: "professional bakers",
    },
    {
        cover: bake,
        desc: "baked to perfection",
    },
    {
        cover: bakery,
        desc: "indulge your cravings",
    },
]

const HomeCard = () => {
    return (
        <homecards>
            <div class='grid bg-no-repeat bg-cover w-full h-screen relative content-center'style={{ backgroundColor: "#FCFBF4" }} >
            <div className='text-center my-auto'>
                <img class='m-auto h-14 mb-4' src={doel} alt=''/> 
                <h2 class="font-satisfy text-5xl tracking-tight mb-12">delivering the best for everyone</h2>
            </div>

            <div className='grid grid-cols-4 gap-2 mx-24 drop-shadow-lg my-auto'>
                {homecards.map((items, index) => (
                    <div className='box border-4 border-black leading-snug shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    text-center p-6 m-4 rounded-lg' key={index}>
                        <img class='w-14 h-14 m-auto my-6' src={items.cover} alt=''/>
                        <label>{items.desc}</label>
                    </div>
                ))}
            </div>
            </div>
        </homecards>
    ) 
}

export default HomeCard
