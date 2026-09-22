import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import HeroSection from './components/hero-section/HeroSection.jsx'
import ProfitCard from './components/shared/profit-card/ProfitCard.jsx'
import Profit from './components/profit/Profit.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <Profit />



    </>
  )
}

export default App
