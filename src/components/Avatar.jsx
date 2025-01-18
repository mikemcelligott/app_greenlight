import React from 'react'

    export default function Avatar({ person, isGreenlit, isRedlit, onClick }) {
      return (
        <div className="relative" onClick={onClick}>
          <div className="w-full pb-[100%] relative">
            <div className={`absolute inset-0 rounded-full overflow-hidden transition-all duration-300 ${
              isGreenlit ? 'shadow-[0_0_10px_3px_rgba(5,150,105,0.9),0_0_25px_8px_rgba(16,185,129,0.6),0_0_50px_15px_rgba(16,185,129,0.3)]' :
              isRedlit ? 'shadow-[0_0_20px_4px_rgba(185,28,28,0.8),0_0_40px_10px_rgba(185,28,28,0.4)]' :
              'shadow-[0_8px_24px_rgba(0,0,0,0.2)]'
            }`}>
              <img
                src={person.avatar}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {person.compatibility && (
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-green-600 text-white text-xs font-bold rounded-full px-2 py-1 shadow-md">
                  {person.compatibility}%
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }
