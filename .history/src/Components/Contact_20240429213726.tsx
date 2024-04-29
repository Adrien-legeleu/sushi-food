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
    "& .MuiInputBase-input": {
        color: "white", // Couleur du texte blanc
        fontSize: "18px", // Taille de police augmentée
    },
    "& .MuiInput-underline:before": {
        borderBottomWidth: "2px",
        padding: "10px", 
        borderBottomColor: "#A6977C", 
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#0B1517", 
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: "#0B1517", 
    },
});