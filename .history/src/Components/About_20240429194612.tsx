export const About =()=>{
    return(
        <div className="h-screen w-full mt-20 bg-[url('././assets/fond.jpeg')]  bg-cover bg-center relative flex items-center justify-center ">
            {/* <div className="absolute w-3/4 h-3/4  -top-1/2 left-0">
                <img className="w-full h-full object-contain" src="" alt="cerisier" />
            </div> */}
            <div className="flex items-center w-2/3 h-[90%] ">
                <div className="flex-1 h-[80%]">
                    <img className="w-2/3 h-full rounded-3xl object-cover" src="./picture.jpeg" alt="" />
                </div>
                <div className="flex-1 flex gap-2 flex-col">
                    <h4 className="text-whiteText text-sm">YOUR SPECIAL OCCASION DETINATION</h4>
                    <p className="text-whiteTitle text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla reprehenderit sunt sit recusandae aperiam numquam ex asperiores voluptatibus, ut assumenda!</p>
                </div>
            </div>
        </div>
    )
}