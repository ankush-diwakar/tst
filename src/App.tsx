import React from 'react'
import './index.css'
import Button from './components/Button'
import Form from './components/Form'
const App = () => {
  return (
    <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Form/>
        <Button title={"my custom button"} />

    </div>
  )
}

export default App
