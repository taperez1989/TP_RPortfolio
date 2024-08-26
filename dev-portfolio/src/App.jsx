// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import ProjectList from './components/ProjectList.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

function App() {
  

  return (
    <div>
      <Navbar />
      <AboutMe />
      <Skills />
      <ProjectList />
      <Contact />
      <Footer />
  </div>
  )
}

export default App
