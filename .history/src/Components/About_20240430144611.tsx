export const About =()=>{
    return(
        <div className="h-screen w-full  relative flex items-center justify-center ">
            <div className="absolute h-[58%]  -top-[45%] left-0">
                <img className="w-full h-full object-contain" src="./psd (3).png" alt="cerisier" />
            </div>
            <div className="flex items-center mt-20 w-2/3 h-[90%] ">
                <div className="flex-1 h-[80%]">
                    <img className="w-2/3 h-full rounded-3xl object-cover" src="./picture.jpeg" alt="" />
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