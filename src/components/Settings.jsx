import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function DualRangeSlider({ min, max, values, onChange }) {
  const handleChange = (index) => (e) => {
    const newValues = [...values]
    newValues[index] = Number(e.target.value)
    if (index === 0) {
      newValues[0] = Math.min(newValues[0], newValues[1])
    } else {
      newValues[1] = Math.max(newValues[0], newValues[1])
    }
    onChange(newValues)
  }

  return (
    <div className="space-y-4">
      <style>
        {`
          .range-slider input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            height: 2px;
            width: 100%;
            position: absolute;
            background-color: transparent;
            pointer-events: none;
          }
          
          .range-slider input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            background-color: #22c55e;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            pointer-events: auto;
            margin-top: -11px; /* (24px - 2px) / 2 */
          }
          
          .range-slider input[type="range"]::-webkit-slider-thumb:hover {
            background-color: #16a34a;
          }
          
          .range-slider input[type="range"]::-webkit-slider-thumb:active {
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 0 8px rgba(34, 197, 94, 0.1);
          }
        `}
      </style>
      <div className="range-slider relative h-6 flex items-center">
        <div className="absolute w-full h-0.5 bg-gray-200 rounded"></div>
        <div 
          className="absolute h-0.5 bg-green-500 rounded"
          style={{
            left: `${((values[0] - min) / (max - min)) * 100}%`,
            right: `${100 - ((values[1] - min) / (max - min)) * 100}%`
          }}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          value={values[0]}
          onChange={handleChange(0)}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={values[1]}
          onChange={handleChange(1)}
        />
      </div>
      <div className="flex justify-between text-sm text-green-700 font-medium">
        <span>{values[0]}</span>
        <span>{values[1]}</span>
      </div>
    </div>
  )
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        <div className={`w-5 h-5 border-2 rounded transition-colors ${
          checked ? 'bg-green-600 border-green-600' : 'border-gray-300 group-hover:border-green-400'
        }`}>
          {checked && (
            <svg
              className="w-full h-full text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-gray-700 group-hover:text-gray-900">{label}</span>
    </label>
  )
}

export default function Settings() {
  const navigate = useNavigate()
  const [ageRange, setAgeRange] = useState([25, 40])
  const [genderPreferences, setGenderPreferences] = useState({
    men: true,
    women: true,
    trans: true
  })

  const handleGenderChange = (gender) => {
    setGenderPreferences(prev => ({
      ...prev,
      [gender]: !prev[gender]
    }))
  }

  return (
    <div className="pt-20 p-4 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 mr-2 text-white bg-green-600 hover:bg-green-700 rounded-full transition-colors"
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
          <h3 className="font-bold mb-4">Show Me</h3>
          <div className="space-y-3 mb-6">
            <Checkbox
              label="Men"
              checked={genderPreferences.men}
              onChange={() => handleGenderChange('men')}
            />
            <Checkbox
              label="Women"
              checked={genderPreferences.women}
              onChange={() => handleGenderChange('women')}
            />
            <Checkbox
              label="Trans"
              checked={genderPreferences.trans}
              onChange={() => handleGenderChange('trans')}
            />
          </div>
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
