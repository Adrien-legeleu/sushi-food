import { Header } from "./Components"
import MenuData from "./Data/Menu"

interface MenuProps {
    titre:string
    title:string
    src:string
    price:string
}

const MenuPage=()=>{
    return (
        <div>
            <Header/>
            <div>
                {
                    MenuData.map((menu , index)=>(
                  
                            <div key={index}>
                               { menu.titre}
                            </div>
                        
                    ))
                }
            </div>
        </div>
    )
}
export default MenuPage