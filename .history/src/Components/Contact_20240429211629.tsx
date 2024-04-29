import { TextField } from "@mui/material"

export const Contact =()=>{
    return(
        <div  className="h-screen w-full bg-[url('././assets/contact-fond.jpg')] bg-cover bg-bottom bg-fixed flex items-center justify-end">
            <form className="flex flex-col w-full pl-[50%]">
                <TextField id="name" label="name" variant="standard" />
                <TextField id="email" label="email" variant="standard" />
                <TextField id="tel" label="tel" variant="standard" />
                <TextField id="message" label="message" variant="standard" />
            </form>
        </div>
    )
}