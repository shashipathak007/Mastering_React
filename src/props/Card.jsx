import React from 'react'


const Card = (props) => {
    return (
    <div className='bg-blue-200  w-64 border-2 border-gray-300 rounded-lg p-4 shadow-md flex flex-wrap items-center'>
        <img src={props.image} className='w-full h-32 object-cover mb-2' />
        <h2>{props.title}</h2>
        <p>{props.des}</p>
        <h3>${props.price}</h3>
        
      
        
    </div>
  )
}

export default Card