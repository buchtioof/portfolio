import { Routes, Route } from 'react-router-dom'
import Aurora from './components/Aurora.jsx'
import './assets/css/scheme.css'
import './assets/css/index.css'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
      <div className="App">
        <Aurora 
          colorStops={["#FF94B4", "#b49fda", "#7ac5d8"]}
          blend={0.5}
          amplitude={0.5}
          speed={1.0}
        />
        <main className="AppMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          <Navbar />
        </main>
      </div>
      
  );
}