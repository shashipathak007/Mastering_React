import React, { useState } from 'react'

const InputMirror = () => {

    const [text, setText]= useState(" ")

  return (
    <div>
        <input className='h-auto w-3xl bg-gray-400 text-2xl text-red-500 placeholder:bg-white   ' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Type Something.....'/>
        <p className=''>You Typed : {text}</p>
    </div>
  )
}

export default InputMirror