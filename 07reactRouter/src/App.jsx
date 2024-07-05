import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Github from './Components/Github/Github'
import Home from './Components/Home/Home'

import Footer from './Components/Footer/Footer'
import User from './Components/User/User'
import Contact from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-blue-400 w-full'></h1>
    </>
  )
}

export default App
