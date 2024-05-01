import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import MenuPage from "./MenuPage"

const App =()=> {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/menu" element={<MenuPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
