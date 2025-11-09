import { Routes, Route } from 'react-router-dom'
import { Home, Work } from '../pages'
import Navbar from '../components/Navbar.comp.jsx'

export default function App() {
  return (
    <div className="App">
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