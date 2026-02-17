import React from 'react'

const Mybuttons = (props) => {
  return (
    <button className={`bg-${ props.bg } px-4 py-2 rounded`}>

        {props.text}
    </button>
  )
}

export default Mybuttons