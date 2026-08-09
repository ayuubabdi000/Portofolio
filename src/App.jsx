import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project"

import AOS from 'aos'
import 'aos/dist/aos.css'
const App = () => {
  const [darkMode, setDarkmode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    })
    document.documentElement.classList.add('dark')
  }, [])
  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkmode(newMode)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className={
      darkMode
        ? "bg-linear-to-br from-gray-900 via-[#230d2e] to-purple-900 min-h-screen"
        : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"

    }>
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Hero 
      darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}/>
      <About 
      darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}/>
      <Skills 
      darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}/>
        <Project />
      <Contact
      darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}/>




    </div>
  )
}

export default App
