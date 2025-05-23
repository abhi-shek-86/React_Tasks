import {Navbar} from './components/Navbar.jsx'
import {About} from './components/About.jsx'
import {Skills} from './components/Skills.jsx'
import {Projects} from './components/Projects.jsx'

function App(){
  return (
    <>
    <Navbar></Navbar>
    <About />
    <Skills></Skills>
    <Projects></Projects>
    </>
    
  )
}

export default App