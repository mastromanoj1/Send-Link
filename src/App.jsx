import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhoneForm from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
       <h2> Wonderla Nehru </h2>
        <PhoneForm/>
    </>
 
  )
}

export default App
