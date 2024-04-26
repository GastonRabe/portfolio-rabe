import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Este va a ser el Portfolio de GR <img src="./src/assets/logo.png" alt="logo"/></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Gracias por esperar
      </p>
    </>
  )
}

export default App
