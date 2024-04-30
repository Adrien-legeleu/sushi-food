export const Footer =()=>{
    return(
        <div className="h-full w-full grid grid-cols-3  itmes-center p-10">
            <h2 className="font-title text-whiteTitle text-5xl">
                Sushi Food
            </h2>
            <ul>
                <li className="font-text text-whiteText">mentions légales</li>
                <li className="font-text text-whiteText" >politique de confidentialité</li>
                <li className="font-text text-whiteText">© 2024 MINO</li>
            </ul>
            <div>
                <p className="font-text text-whiteText">site design by MINO</p>
                <button className="font-text text-whiteText p-2 pl-4 pr-4 bg-redBG rounded-full">
                    créez votre site gratuitement
                </button>
            </div>
        </div>
    )
}