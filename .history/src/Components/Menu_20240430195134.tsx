import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="h-screen w-full lg:pl-36">
      <div className="flex items-center lg:flex-row flex-col-reverse  mt-20 w-full h-[90%] ">
        <div className="flex-1 ">
          <div className="max-w-[600px] w-full m-auto bottom-32 lg:bottom-0  flex gap-4 flex-col text-center relative">
            <h6 className="text-whiteText text-sm font-title">
              Découvrez l'Excellence
            </h6>
            <h2 className="text-whiteTitle text-4xl font-title">
              OUR CHEF RECOMMEND
            </h2>
            <p className="text-green text-xl font-text mt-1">
              Explorez les préférences culinaires de notre chef avec une
              sélection exclusive de plats recommandés. Chaque choix reflète
              l'expertise et la passion de notre chef pour l'art du sushi, vous
              offrant une expérience gustative incomparable.
            </p>
             <NavLink to="menu">
          <button className=" mt-5 p-2 pl-4 pr-4 hover:brightness-90 duration-300  bg-redBG rounded-full m-auto text-whiteText">
              OUR MENU
            </button>
          </NavLink>
            
          </div>
        </div>
        <div className="flex-1 h-[80%]">
          <img
            className="w-full h-full  rounded-3xl object-contain"
            src="./psd.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
