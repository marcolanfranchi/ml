import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Other from './pages/Other';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
