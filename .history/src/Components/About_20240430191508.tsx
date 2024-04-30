export const About =()=>{
    return(
        <div className="h-screen w-full  relative flex items-center justify-center  max-w-[1800px] m-auto">
            <div className="absolute h-[58%]  -top-[45%] left-0 hidden mlgd:block">
                <img className="w-full h-full object-contain" src="./psd (3).png" alt="cerisier" />
            </div>
            <div className="flex  items-center mt-20 sm:w-full  lg:w-2/3 w-[95%] h-[90%] gap-10 flex-col sm:flex-row">
                <div className="  flex-1 h-[80%] relative w-full max-x-[600px]">
                    <img className="  w-3/4 h-2/5 absolute top-10 left-[50%] -translate-x-1/2 rounded-3xl object-cover shadow-picture" src="./picture2.png" alt="sushi-food" />
                    <img className="w-1/2 h-1/3  bottom-[20%] rotate-6 right-[5%] absolute rounded-3xl object-cover shadow-picture" src="./picture3.png" alt="sushi-food" />
                    <img className="w-[40%] h-2/4 bottom-[5%] left-[5%] -rotate-6  absolute rounded-3xl object-cover shadow-picture" src="./picture.jpeg" alt="sushi-food" />
                </div>
                <div className="flex flex-1 gap-4 flex-col text-center sm:text-sm">
                    <h6 className="text-whiteText text-sm font-title">YOUR SPECIAL OCCASION DETINATION</h6>
                    <h2 className="text-green text-xl font-text">Découvrez SushiFood : fraîcheur, qualité et créativité dans chaque bouchée !</h2>
                    <p className="text-green text-xl font-text mt-1">SushiFood vous invite à découvrir une symphonie de saveurs exquises, où chaque plat est une exploration culinaire qui éveille les sens et transporte vos papilles au cœur du Japon.</p>
                </div>
            </div>
        </div>
    )
}