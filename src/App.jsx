import './assets/css/scheme.css'
import './assets/css/index.css'
import {ReactLenis} from 'lenis/react'
import Status from './components/Status.jsx'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Works from './pages/Works.jsx'

export default function App() {
  return (
      <div className="App">
        <Status />
        <Background />
        <main className="AppMain">
          <h1>Work in progress, see y'all asap!</h1>
          <img src="https://media1.tenor.com/m/lSBXYvTZzP8AAAAC/man-standing.gif" alt="man standing" />
        </main>
      </div>
  );
}
