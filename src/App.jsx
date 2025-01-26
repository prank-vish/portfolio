import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
import EmailForm from "./components/Email/Email"

function App() {
  
  return <div className="bg-black h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <EmailForm/>
    <Footer/>
  </div>
  
}

export default App
