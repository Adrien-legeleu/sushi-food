import { BorderColor } from "@mui/icons-material";
import { styled, TextField } from "@mui/material"

export const Contact =()=>{
    return(
        <div  className="h-screen w-full bg-[url('././assets/contact-fond.jpg')] bg-cover bg-bottom bg-fixed flex items-center justify-end">
            <form className="flex flex-col w-full pl-[50%] pr-[10%] gap-5">
                <StyledTextField  id="name" label="name" variant="standard" />
                <StyledTextField id="email" label="email" variant="standard" />
                <StyledTextField id="tel" label="tel" variant="standard" />
                <StyledTextField id="message" label="message" variant="standard" />
            </form>
        </div>
    )
}

const StyledTextField = styled(TextField)({
    "& .MuiInput-underline:before": {
        borderBottomWidth: "2px", // Largeur de la bordure augmentée
        color: "#A6977C", // Couleur du placeholder verte au focus
        padding: "10px", // Ajout de padding
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#A6977C", // Couleur de la bordure verte au focus
    },
    "& .MuiInput-underline.Mui-focused:before": {
        borderBottomColor: "#DD2B2D", // Couleur de la bordure rouge par défaut
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: "#DD2B2D", // Couleur du placeholder verte au focus
    },
});