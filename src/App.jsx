import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WonderlaForm } from './components/Card'
import { Button, Space } from 'antd'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'




function App() {

  const [count, setCount] = useState(0)

  return (

  
  <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wonderla" element={<WonderlaForm />} />
        <Route path="/bus" element={<WonderlaForm />} />
        <Route path="/tour" element={<WonderlaForm />} />
      </Routes>
    </Router>  
  
 
  )
}

export default App
