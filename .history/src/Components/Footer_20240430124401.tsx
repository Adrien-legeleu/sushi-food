export const Footer =()=>{
    return(
        <div className="h-full w-full grid grid-cols-3  itmes-center p-10">
            <h2 className="font-title text-whiteTitle text-5xl">
                Sushi Food
            </h2>
            <ul>
                <li className="font-text text-whiteText">mentions légales</li>
                <li>politique de confidentialité</li>
                <li>© 2024 MINO</li>
            </ul>
            <div>
                <p>site design by MINO</p>
                <button>
                    créez votre site gratuitement
                </button>
            </div>
        </div>
    )
}