import { Header } from "./Components";
import { Footer } from "./Components/Footer";
import MenuData from "./Data/Menu";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const MenuPage = () => {
  return (
    <div className="h-full -w-full bg-black">
      <div className="h-full w-full bg-[url('././assets/menupage.jpeg')] bg-left-bottom bg-cover flex items-center pb-24">
        <Header />
        <div className="flex flex-col gap-10 mt-32">
          <h1 className="m text-6xl dt:ext-7xl text-center font-title text-whiteTitle mb-12">
            Discover our menu !{" "}
          </h1>
          {MenuData.map((menu, index) => {
            return (
              <div key={index} className="ml-5 mr-5 ">
                <h3 className="font-title text-2xl mb-5 uppercase text-green">
                  {menu.titre}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MenuPage;
