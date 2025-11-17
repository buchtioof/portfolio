import './assets/css/scheme.css'
import './assets/css/index.css'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'

export default function App() {
  return (
      <div className="App">
        <Background />
        <main className="AppMain">
          <section id="home">
            <Home />
          </section>
          <section id="works">
            <Work />
          </section>
          <Navbar />
        </main>
      </div>
  );
}