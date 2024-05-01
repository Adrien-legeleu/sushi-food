import { Header } from "./Components"
import MenuData from "./Data/Menu"


const MenuPage=()=>{
    return (
        <div>
            <Header/>
            <div>
                {
                    MenuData.map((menu , index)=>(
                  
                            <div className="text-black" key={index}>
                               { menu.titre}
                            </div>
                        
                    ))
                }
            </div>
        </div>
    )
}
export default MenuPage