import { favBread } from "../data/Fb"

const FavMenu = () => {
    return (
        <favmenu>
            <div class='grid bg-no-repeat bg-cover w-full h-screen relative content-center' style={{ backgroundColor: "#605a44" }}>
                <h1 className="text-center text-2xl my-12 text-brokenWhite">
                    <strong>THE ALL TIME FAVORITES</strong> 
                </h1>

                <div className='mx-24 content flex mtop bg-brokenWhite'>
                    {favBread.map((item, index) => (
                        <div className='box shadow' key={index}>
                            <h3>{item.name}</h3>
                            <img class='w-14 h-14 m-auto my-12 hover:scale-150 drop-shadow-lg' src={require(`../assets/images/${item.src}`)} alt={item.alt}/>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </favmenu>
    ) 
}

export default FavMenu