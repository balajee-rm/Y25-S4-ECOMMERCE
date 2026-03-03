import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import Feedback from './components/Feedback.jsx'

function App() {

  return (
    <div>
      <Header />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
