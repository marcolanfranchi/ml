import './app.css';
import Navbar from './Navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Other from './pages/other';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ml" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
