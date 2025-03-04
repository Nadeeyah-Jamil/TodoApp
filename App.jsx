import { useState } from 'react'
import Notes from './Notes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Notes/>
      </div>
      
    </>
  )
}

export default App
