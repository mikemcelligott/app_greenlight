import React from 'react'
    import { Link } from 'react-router-dom'

    export default function Header() {
      return (
        <header className="bg-gradient-to-r from-green-600 to-green-700 py-4 shadow-2xl">
          <div className="container mx-auto px-4 flex items-center justify-center relative">
            <h1 className="text-3xl font-roboto-condensed font-bold text-white text-center">
              greenlight
            </h1>
            <Link to="/settings" className="absolute right-4">
              <img
                src="https://i.pravatar.cc/40?img=5"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </header>
      )
    }
