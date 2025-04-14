import React from 'react'
import './index.css'
import Button from './components/Button'
const App = () => {
  return (
    <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>HELLO WORLD!</p> <br />
        <Button title={"my custom button"} />
    </div>
  )
}

export default App
