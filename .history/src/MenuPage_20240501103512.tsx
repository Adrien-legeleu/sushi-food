import { Header } from "./Components"
import MenuData from "./Data/Menu"


const MenuPage=()=>{
    return (
        <div className="h-screen w-full bg-[url('././assets/menupage.jpg')]  bg-cover flex justify-center">
            <Header/>
            <div className="flex  flex-col gap-10">
                {MenuData.map((menu, index) => {
                    return (
                        <div key={index}>
                            <h3>{menu.titre}</h3>
                            <div className="flex items-center justify-center">

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default MenuPage