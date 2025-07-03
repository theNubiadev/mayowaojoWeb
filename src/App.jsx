import React from 'react'
import { BrowserRouter as Route, Routes,  Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About"

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen bg-white" >
        <Header />
        <main>
        <Route  path="/" element={<Home />}/>
        <Route  path="/about" element={<About />}/>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App