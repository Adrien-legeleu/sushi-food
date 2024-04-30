export const Footer =()=>{
    return(
        <div className="h-full w-full md:grid md:grid-cols-3 gap-12 md:gap-0 flex flex-col-reverse itmes-center justify-center p-10 pb-20 pt-20">
            <h2 className="font-title text-whiteTitle text-5xl">
                Sushi Food
            </h2>
            <ul className="text-center">
                <li className="font-text text-whiteText">mentions légales</li>
                <li className="font-text text-whiteText" >politique de confidentialité</li>
                <li><a className="font-text text-whiteText" href="https://mino-design.netlify.app" target="_">Mino , votre site web Gratuit</a></li>
                <li className="font-text text-whiteText">© 2024 Mino</li>
            </ul>
            <div className="text-center flex flex-col gap-5">
                <p className="font-title text-whiteText">site design by <a className="font-text" href="https://mino-design.netlify.app" target="_">Mino</a></p>
                <a href="https://mino-design.netlify.app" target="_">
                    <button className=" m-auto font-text text-whiteText p-2 pl-4 pr-4 bg-redBG rounded-full">
                    votre site gratuit
                </button>
                </a>
            </div>
        </div>
    )
}