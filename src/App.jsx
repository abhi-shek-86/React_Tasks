import {Navbar} from './components/Navbar.jsx'
import {About} from './components/About.jsx'
import {Skills} from './components/Skills.jsx'
import {Projects} from './components/Projects.jsx'
import {Contact} from './components/Contact.jsx'
import {Footer} from './components/Footer.jsx'
import { Experience } from './components/Experience.jsx'

function App(){
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App