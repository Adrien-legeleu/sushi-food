import { Header } from "./Components"
import { Footer } from "./Components/Footer";
import MenuData from "./Data/Menu"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const MenuPage = () => {
    return (
        <div className="h-full -w-full bg-black">
            <div className="h-full w-full bg-[url('././assets/menupage.jpg')] bg-right-top bg-cover flex items-center pb-24">
            <Header />
            <div className="flex flex-col gap-10 mt-32">
            <h1 className="text-7xl text-center font-title text-whiteTitle mb-12">Discover our menu ! </h1>
                {MenuData.map((menu, index) => {
                    return (
                        <div key={index} className="ml-5 mr-5 ">
                            <h3 className="font-title text-2xl mb-5 uppercase text-green">{menu.titre}</h3>
                            <div>
                                <Splide className="  w-[85%] mx-auto pb-10 pt-10" options={{ perPage: 3, pagination: false }}>
                                {
                                    menu.repas.map((food, index) => {
                                        return (
                                            <SplideSlide className="rounded-3xl flex flex-col justify-between gap-2 h-full pl-5 pr-5 " key={index}>
                                                <h4 className="text-whiteTitle text-lg font-text text-center">{food.title}</h4>
                                                <img className="rounded-3xl" src={food.src} alt={`image ${food.title}`} />
                                                <p className="text-whiteText font-text text-sm text-left">{food.desc}</p>
                                            </SplideSlide>
                                        )
                                    })
                                }
                            </Splide>
                            </div>
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

