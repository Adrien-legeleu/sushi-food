export const Menu = ()=>{
    return(
        <div className="h-screen w-full pl-36">
            <div className="flex items-center mt-20 w-full h-[90%] ">
                <div className=" flex gap-4 flex-col text-center relative max-w-[600px] ">
                    <h6 className="text-whiteText text-sm font-title">Découvrez l'Excellence</h6>
                    <h2 className="text-whiteTitle text-4xl font-title">OUR CHEF RECOMMEND</h2>
                    <p className="text-green text-xl font-text mt-1">Explorez les préférences culinaires de notre chef avec une sélection exclusive de plats recommandés. Chaque choix reflète l'expertise et la passion de notre chef pour l'art du sushi, vous offrant une expérience gustative incomparable.</p>
                    <button className=" mt-5 p-2 pl-4 pr-4 hover:brightness-90 duration-300  bg-redBG rounded-full m-auto text-whiteText">OUR MENU</button>
                </div>
                <div className="" w-full h-[80%]">
                    <img className="w-full h-full  rounded-3xl object-contain" src="./psd.png" alt="" />
                </div>
            </div>
        </div>
    )
}

