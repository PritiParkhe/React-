import { useState } from 'react'
import Card from './Card'

import './App.css'


function App() {
  const [count, setCount] = useState(0)
let myobj ={
  username:"priti",
  age: 23

}
let newarr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>  
      <Card  username ="Priti_Parkhe" btnText="Click me"/>
      <Card username ="Preet" btnText="visit me"/>
      

      
    </>
  )
}

export default App
