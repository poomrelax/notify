import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UAParser } from 'ua-parser-js'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const parser = new UAParser()
    const result = parser.getResult()

    const data ={
      text: result
    }

    // axios.post('http://localhost:2553/notify/', data)
  })

  return (
    <>
      <div>
        <h1 style={{color: '#fff'}}>ขอบคุณที่ไว้ใจ </h1><br />
        <h2 style={{color: 'red'}}>ปิดหน้าเว็บนี้ได้เลย</h2>
      </div>
    </>
  )
}

export default App
