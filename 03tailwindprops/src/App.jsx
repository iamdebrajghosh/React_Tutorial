import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Jerry",
    age: 32
  }

  let newArr = [10, 12, 15];

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS Test</h1>  

    {/* <Card channel="coffeewithcode" someObj={myObj} someArr={newArr}/>     */}
    <Card username="CoffeLover"/>
    <Card />    
    </>
  )
}

export default App
