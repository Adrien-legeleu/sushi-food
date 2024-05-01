import { Header } from "./Components"
import MenuData from "./Data/Menu"


const MenuPage=()=>{
    return (
        <div className="h-screen w-full bg-[url('././assets/menupage.jpg')]  bg-cover">
            <Header/>
            <div>
                {MenuData.map((menu, index) => {
                    console.log(menu); // Corrected placement of console.log()
                    return (
                        <div key={index}>
                            <h3>{menu.titre}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default MenuPage