import { Header } from "./Components"
import MenuData from "./Data/Menu"


const MenuPage=()=>{
    return (
        <div className="h-screen w-full bg-[url('././assets/menupage.jpg')]  bg-cover flex items-center">
            <Header/>
            <div className="flex  flex-col gap-10">
                {MenuData.map((menu, index) => {
                    return (
                        <div key={index}>
                            <h3>{menu.titre}</h3>
                            <div className="flex items-center justify-center gap-5">
                                {
                                    menu.repas.map((food , index)=>{
                                        return(
                                            <div className="bg-black" key={index}>
                                                <h4>{food.title}</h4>
                                                <img src={food.src} alt={`image ${food.title}`} />
                                                <p>{food.title}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default MenuPage