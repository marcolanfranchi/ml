import './app.css';
import Navbar from './pages/Navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Home from './pages/home';
import Footer from './pages/footer'; // Import the Footer
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer /> {/* Add Footer here */}
        </>
    );
}

export default App;
