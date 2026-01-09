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
        <ReactLenis root>
            <div className="App">
                <Status/>
                <Background/>
                <main className="AppMain">
                    <section id="home">
                        <Home/>
                    </section>
                    <section id="works">
                        <Works/>
                    </section>
                    <section id="about">
                        <About/>
                    </section>
                    <Navbar/>
                </main>
            </div>
        </ReactLenis>
    );
}
