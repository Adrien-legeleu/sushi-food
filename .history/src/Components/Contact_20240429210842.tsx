import { TextField } from "@mui/material"

export const Contact =()=>{
    return(
        <div  className="h-screen w-full bg-[url('././assets/contact-fond.jpg')] bg-cover bg-bottom bg-fixed flex items-center justify-end">
            <form className="flex flex-col w-1/2 right-20 relative">
                <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}