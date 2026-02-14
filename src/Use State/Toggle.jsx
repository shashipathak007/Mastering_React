import React, { use, useState } from 'react'

const Toggle = () => {
    const [isOn , setIsOn] = useState(true)
  return (
    <div>
        <h2>Status : {isOn  ? "OFF": "On"} </h2>
        <button onClick={()=> setIsOn(!isOn)}>toggle</button>
    </div>
  )
}

export default Toggle