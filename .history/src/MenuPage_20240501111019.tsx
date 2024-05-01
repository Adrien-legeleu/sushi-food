import { Header } from "./Components"
import { Footer } from "./Components/Footer";
import MenuData from "./Data/Menu"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const MenuPage = () => {
    return (
        <div className="h-full -w-full bg-black">
            <div className="h-full w-full bg-[url('././assets/menupage.jpg')] bg-right-top bg-cover flex items-center">
            <Header />
            <div className="flex flex-col gap-10 mt-32">
                {MenuData.map((menu, index) => {
                    return (
                        <div key={index} className="pl-5 pr-5">
                            <h3 className="font-title text-2xl mb-5 uppercase text-green">{menu.titre}</h3>
                            <Splide className="w-[85%] mx-auto" options={{ perPage: 3, pagination: false }}>
                                {
                                    menu.repas.map((food, index) => {
                                        return (
                                            <SplideSlide className="rounded-3xl flex flex-col justify-between pl-5 pr-5" key={index}>
                                                <h4 className="text-whiteTitle text-lg font-text text-center">{food.title}</h4>
                                                <img className="rounded-3xl" src={food.src} alt={`image ${food.title}`} />
                                                <p className="text-whiteText font-text text-sm text-left">{food.title}</p>
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
        <Footer/>
        </div>
    )
}
export default MenuPage
