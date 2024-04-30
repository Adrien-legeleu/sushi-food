export const About =()=>{
    return(
        <div className="h-screen w-full  gap-5 relative flex items-center justify-center  max-w-[7500px] m-auto">
            <div className="absolute h-[58%]  -top-[45%] left-0">
                <img className="w-full h-full object-contain" src="./psd (3).png" alt="cerisier" />
            </div>
            <div className="flex items-center mt-20 w-2/3 h-[90%]">
                <div className="flex-1 h-[80%] relative">
                    <img className="w-3/4 h-2/5 absolute top-10 left-[5%] rounded-3xl object-cover shadow-picture" src="./picture2.png" alt="sushi-food" />
                    <img className="w-1/2 h-1/3  bottom-[20%] rotate-6 left-[45%] absolute rounded-3xl object-cover shadow-picture" src="./picture3.png" alt="sushi-food" />
                    <img className="w-2/5 h-2/4 bottom-[5%] left-0 -rotate-6  absolute rounded-3xl object-cover shadow-picture" src="./picture.jpeg" alt="sushi-food" />
                </div>
                <div className="flex-1 flex gap-4 flex-col">
                    <h6 className="text-whiteText text-sm font-title">YOUR SPECIAL OCCASION DETINATION</h6>
                    <h2 className="text-green text-xl font-text">Découvrez SushiFood : fraîcheur, qualité et créativité dans chaque bouchée !</h2>
                    <p className="text-green text-xl font-text mt-1">SushiFood vous invite à découvrir une symphonie de saveurs exquises, où chaque plat est une exploration culinaire qui éveille les sens et transporte vos papilles au cœur du Japon.</p>
                </div>
            </div>
        </div>
    )
}