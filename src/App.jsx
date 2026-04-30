import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contacts } from "./components/Contacts"
import { Footer } from "./components/Footer"


function App(){
  return(
    <div className="min-h-screen bg-linear-to-br from-slate-950 to-slate-900 text-slate-200 overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contacts />
        <Footer />
    </div>

  )
}

export default App