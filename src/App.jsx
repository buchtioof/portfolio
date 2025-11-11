import { Routes, Route } from 'react-router-dom'
import Background from './components/Background.jsx'
import './assets/css/scheme.css'
import './assets/css/index.css'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
      <div className="App">
        <Background />
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