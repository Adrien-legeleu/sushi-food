import { About, Contact, Header, Landing, Menu } from "./Components"
import { Footer } from "./Components/Footer"

const App =()=> {
  return (
    <div className="bg-greenBlack h-full w-full gap-20 ">
      <Header/>
      <Landing/>
      <div className="h-full w-full bg-[url('././assets/fond.jpeg')]  bg-cover bg-center relative shadow-lg shadow-white">
          <About/>
           <Menu/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
