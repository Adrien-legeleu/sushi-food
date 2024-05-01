import { Header } from "./Components"
import MenuData from "./Data/Menu"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const MenuPage=()=>{
    return (
        <div className="h-full w-full bg-[url('././assets/menupage.jpg')] bg-right-top  bg-cover flex items-center">
            <Header/>
            <div className="flex  flex-col gap-10 mt-32">
                {MenuData.map((menu, index) => {
                    return (
                        <div key={index}>
                            <h3>{menu.titre}</h3>
                            <Splide className="flex items-center justify-center gap-5" options={{ perPage: 4   , pagination:false}}>
                                {
                                    menu.repas.map((food , index)=>{
                                        return(
                                            <SplideSlide className="bg-black" key={index}>
                                                <h4>{food.title}</h4>
                                                <img src={food.src} alt={`image ${food.title}`} />
                                                <p>{food.title}</p>
                                            </SplideSlide>
                                        )
                                    })
                                }
                            </Splide>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default MenuPage
