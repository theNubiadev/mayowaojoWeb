import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Gallery from "./pages/Gallery";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/gallery" element={<Gallery />}/>

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
