import React from 'react'
import { useState } from 'react'

const DarkMode = () => {
    const [dark, setDark] = useState(false)
  return (
    <div className='container'>

    <i className="uil uil-moon change-theme" onChange={() => setDark (!dark)}></i>


    </div>
  )
}

export default DarkMode