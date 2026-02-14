import React, { useState } from 'react'

const Passwords = () => {
    const [show, setShow]= useState(false)
  return (
    <div>
        <input type={show ? "text" : "password"} />
        <button onClick={()=> setShow(!show)} > {show ? "Hide" : "Show"}</button>
    </div>
  )
}

export default Passwords 