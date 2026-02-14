import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-72 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">
          Counter
        </h1>

        <p className="text-4xl font-extrabold text-indigo-600">
          {count}
        </p>

        <div className="flex justify-between gap-3">
          <button
            onClick={() => setCount(count - 1)}
            className="flex-1 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 active:scale-95 transition"
          >
            Decrease
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 active:scale-95 transition"
          >
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter;
