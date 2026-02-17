import React from 'react'

const Abc = () => {

  const Avengers = ['Ironman', 'Hulk', 'Spiderman', 'Thor']

  return (
    <div>
      <h1>Learning Map Method</h1>
      <ol>
        {Avengers.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ol>
    </div>
  )
}

export default Abc
