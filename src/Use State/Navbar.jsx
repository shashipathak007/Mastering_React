import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold">MyStore</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Products</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Products</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
