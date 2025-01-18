import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="py-4 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-center relative">
          <h3 className="text-2xl font-roboto-condensed font-bold text-white text-center glow">
            greenlight
          </h3>
          <Link to="/settings" className="absolute right-4">
            <img
              src="https://i.pravatar.cc/40?img=5"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white/50 cursor-pointer hover:opacity-80 transition-opacity shadow-[0_0_8px_2px_rgba(255,255,255,0.3)]"
            />
          </Link>
        </div>
      </div>
      <style jsx>{`
        header {
          background: linear-gradient(
            145deg,
            #22c55e 0%,
            #1e9c4f 20%,
            #1a7a40 40%,
            #1e9c4f 60%,
            #22c55e 80%,
            #1e9c4f 100%
          );
          box-shadow: 
            0 2px 4px -1px rgba(0, 0, 0, 0.2),
            0 1px 2px -1px rgba(255, 255, 255, 0.1) inset,
            0 -1px 2px -1px rgba(0, 0, 0, 0.2) inset;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow {
          text-shadow: 
            0 0 3px rgba(255, 255, 255, 0.6),
            0 0 6px rgba(255, 255, 255, 0.4),
            0 0 10px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </header>
  )
}
