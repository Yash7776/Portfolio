import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Routes, Route } from "react-router-dom";
import Education from './Components/Eduction'

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
