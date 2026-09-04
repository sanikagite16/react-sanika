import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
    
  let [counter, setCounter] = useState(15)
  //let counter = 5

  const addValue = () => {
        counter = counter+1
        setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onclick = {addValue}
      >Add value {counter}</button>
      <br/>
      <button
      onclick = {removeValue}
      >Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
