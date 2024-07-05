import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
   userName: "Dharmesh",
   age : 20
  } 
  
  let newArr =[1,2,3]

  return (
    <div>
      <h1 className='bg-blue-400 rounded-xl text-black p-5 mb-4'>Tailwind Test</h1>
        <Card userName="Patel" btnText="click me"/>
        <Card userName="Dharmesh" btnText="visit me"/>
</div>
  )
}

export default App
