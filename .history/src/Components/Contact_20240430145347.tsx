import { styled, TextField } from "@mui/material"

export const Contact =()=>{
    return(
        <div  className="h-screen w-full bg-[url('././assets/contact-fond.jpg')] bg-cover bg-bottom bg-fixed flex flex-col items-center justify-center">
            <h2 className="font-title text-6xl text-green pl-[50%] pr-[10%] mb-10 ">Contactez-nous</h2>
            <form className="flex flex-col w-full pl-[50%] pr-[10%] gap-5">
                <StyledTextField  id="name" label="name" variant="standard" />
                <StyledTextField id="email" label="email" variant="standard" />
                <StyledTextField id="tel" label="tel" variant="standard" />
                <StyledTextField id="message" label="message" variant="standard" />
                <button className="p-2 pl-4 pr-4 rounded-full bg-redBG m-auto text-whiteText text-xl" type="submit">Envoyer</button>
            </form>
        </div>
    )
}

const StyledTextField = styled(TextField)({
    "& .MuiInputBase-input": {
        color: "white", // Couleur du texte blanc
        fontSize: "18px", // Taille de police augmentée
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#a1a1a1", 
    },
     "& .MuiInput-underline:before": {
        borderBottomWidth: "2px",
        padding: "10px",
        borderBottomColor: "#a9a9a9",
        borderRadius: "2px", // Border radius ajouté
    },
    "& .MuiFormLabel-root": {
        color: "white", // Couleur du placeholder blanc
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: "#a1a1a1",
    },
});