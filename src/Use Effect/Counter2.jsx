import React, { useEffect, useState } from 'react'

const Counter2 = () => {
    const [count, setCount]= useState(0);
    useEffect (()=> {
        console.log("Count Changed" , count)
    }, [count]);
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={()=> setCount(count +1)}>Increase </button>
    </div>
  )
}

export default Counter2