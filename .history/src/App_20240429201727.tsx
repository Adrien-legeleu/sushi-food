import { About, Contact, Header, Landing, Menu } from "./Components"

const App =()=> {
  return (
    <div className="bg-greenBlack h-full w-full gap-20">
      <Header/>
      <Landing/>
      <div className="h-full w-full bg-[url('././assets/fond.jpeg')]  bg-cover bg-center relative">
          <About/>
           <Menu/>
           <Contact/>
        </div>
    </div>
  )
}

export default App
