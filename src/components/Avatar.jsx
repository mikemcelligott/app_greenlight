import React from 'react'

export default function Avatar({ person, isGreenlit, isRedlit, onClick }) {
  return (
    <div className="relative p-0.5" onClick={() => onClick(person.id)}>
      <div className="w-[70%] mx-auto aspect-square relative">
        <div className={`absolute inset-0 rounded-full overflow-visible transition-all duration-300 ${
          isGreenlit ? 'shadow-[0_0_8px_2px_rgba(5,150,105,0.9),0_0_20px_6px_rgba(16,185,129,0.6),0_0_40px_12px_rgba(16,185,129,0.3)]' :
          isRedlit ? 'shadow-[0_0_12px_3px_rgba(185,28,28,0.8),0_0_25px_8px_rgba(185,28,28,0.4)]' :
          'shadow-[0_2px_6px_rgba(0,0,0,0.15)]'
        }`}>
          <img
            src={person.avatar}
            alt={person.name}
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
        </div>
        {person.compatibility && (
          <div 
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-green-600 text-white text-[0.6rem] font-bold rounded-full px-1.5 py-0.5 shadow-md">
              {person.compatibility}%
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
