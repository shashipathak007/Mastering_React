import React, { useState } from 'react'

const CharCounter = () => {
    const [text, setText]= useState("")
  return (
    <div>
        <textarea name="text" id="text" onChange={(e)=> setText(e.target.value)}></textarea>
        <p>Character: {text.length}</p>
    </div>
  )
}

export default CharCounter