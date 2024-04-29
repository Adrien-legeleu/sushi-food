export const Menu = ()=>{
    return(
        <div className="h-screen w-full">
            <div className="flex items-center mt-20 w-full h-[95%] ">
                <div className="flex-1 h-[80%]">
                    <img className="w-2/3 h-full rounded-3xl object-cover" src="./picture.jpeg" alt="" />
                </div>
                <div className="flex-1 flex gap-4 flex-col">
                    <h4 className="text-whiteText text-sm font-title">YOUR SPECIAL OCCASION DETINATION</h4>
                    <p className="text-green text-xl font-text">Découvrez SushiFood : fraîcheur, qualité et créativité dans chaque bouchée !</p>
                    <p className="text-green text-xl font-text mt-1">SushiFood vous invite à découvrir une symphonie de saveurs exquises, où chaque plat est une exploration culinaire qui éveille les sens et transporte vos papilles au cœur du Japon.</p>
                </div>
            </div>
        </div>
    )
}

