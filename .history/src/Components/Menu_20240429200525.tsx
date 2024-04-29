export const Menu = ()=>{
    return(
        <div className="h-screen w-full">
            <div className="flex items-center mt-20 w-2/3 h-[90%] ">
                <div className="flex-1 h-[80%]">
                    <img className="w-2/3 h-full rounded-3xl object-cover" src="./picture.jpeg" alt="" />
                </div>
                <div className="flex-1 flex gap-4 flex-col">
                    <h6 className="text-whiteText text-sm font-title">Découvrez l'Excellence</h6>
                    <h2 className="text-whiteTitle text-xl font-title">OUR CHEF RECOMMEND</h2>
                    <p className="text-green text-xl font-text mt-1">Explorez les préférences culinaires de notre chef avec une sélection exclusive de plats recommandés. Chaque choix reflète l'expertise et la passion de notre chef pour l'art du sushi, vous offrant une expérience gustative incomparable.</p>
                    <button className="p-2  border-y-1 border-[#DD2B2D] m-auto">OUR MENU</button>
                </div>
            </div>
        </div>
    )
}

