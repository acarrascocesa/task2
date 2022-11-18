import { useState } from 'react'
import './App.css'
import Dogs from './components/Dogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='title'>Dog App</h1>
      <Dogs />
    </div>
  )
}

export default App
