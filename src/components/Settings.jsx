import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
    import { useNavigate } from 'react-router-dom'

    function DualRangeSlider({ min, max, values, onChange }) {
      const handleChange = (index) => (e) => {
        const newValues = [...values]
        newValues[index] = Number(e.target.value)
        onChange(newValues)
      }

      return (
        <div className="space-y-4">
          <div className="relative h-10">
            <input
              type="range"
              min={min}
              max={max}
              value={values[0]}
              onChange={handleChange(0)}
              className="absolute w-full h-2 bg-green-50 rounded-lg appearance-none cursor-pointer z-10"
            />
            <input
              type="range"
              min={min}
              max={max}
              value={values[1]}
              onChange={handleChange(1)}
              className="absolute w-full h-2 bg-green-50 rounded-lg appearance-none cursor-pointer z-20"
            />
            <div className="absolute h-2 bg-green-100 rounded-lg" 
              style={{
                left: `${((values[0] - min) / (max - min)) * 100}%`,
                right: `${100 - ((values[1] - min) / (max - min)) * 100}%`
              }}
            />
          </div>
          <div className="flex justify-between text-sm text-green-700">
            <span>{values[0]}</span>
            <span>{values[1]}</span>
          </div>
        </div>
      )
    }

    export default function Settings() {
      const navigate = useNavigate()
      const [ageRange, setAgeRange] = useState([25, 40])

      return (
        <div className="p-4 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
          <div className="flex items-center mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 mr-2 text-green-700 hover:bg-green-100 rounded-full transition-colors"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold">Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold mb-2">Account</h3>
              <p>Manage your profile and preferences</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold mb-2">Notifications</h3>
              <p>Configure notification settings</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold mb-2">Age Range</h3>
              <DualRangeSlider
                min={18}
                max={60}
                values={ageRange}
                onChange={setAgeRange}
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold mb-2">Compatibility Quiz</h3>
              <button
                onClick={() => navigate('/quiz')}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Take Compatibility Quiz
              </button>
            </div>
          </div>
        </div>
      )
    }
