import './assets/css/scheme.css'
import './assets/css/index.css'
import Status from './components/Status.jsx'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Works from './pages/Works.jsx'

export default function App() {
  return (
      <div className="App">
        <Status />
        <Background />
        <main className="AppMain">
          <section id="home">
            <Home />
          </section>
          <section id="works">
            <Works />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <Navbar />
        </main>
      </div>
  );
}
