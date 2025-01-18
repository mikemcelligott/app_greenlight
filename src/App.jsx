import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Avatar from './components/Avatar'
import Settings from './components/Settings'
import Quiz from './components/Quiz'
import { persons } from './data/persons'
import { updateUserState } from './services/apiService'

function MainScreen() {
  const [greenlit, setGreenlit] = useState([])
  const [redlit, setRedlit] = useState([])
  const currentUserId = 1 // Replace with actual current user ID

  const handleClick = async (id) => {
    let newGreenlit = [...greenlit]
    let newRedlit = [...redlit]
    let state = ''

    if (greenlit.includes(id)) {
      // Currently greenlit - switch to redlit
      newGreenlit = greenlit.filter(gId => gId !== id)
      newRedlit = [...redlit, id]
      state = 'R'
    } else if (redlit.includes(id)) {
      // Currently redlit - switch to nothing
      newRedlit = redlit.filter(rId => rId !== id)
      state = ''
    } else {
      // Currently nothing - switch to greenlit
      newGreenlit = [...greenlit, id]
      newRedlit = redlit.filter(rId => rId !== id)
      state = 'G'
    }

		let ignoreServer = true;
		if (ignoreServer) {
			setGreenlit(newGreenlit)
      setRedlit(newRedlit)
		} else {
    try {
      await updateUserState(currentUserId, id, state)
      setGreenlit(newGreenlit)
      setRedlit(newRedlit)
    } catch (error) {
      console.error('Failed to update state:', error)
      // Optionally show error message to user
    }			
		}
		

  }

  return (
    <div className="pt-20 pb-4 bg-gradient-to-br from-white to-gray-100">
      <div className="grid grid-cols-3 gap-y-8 gap-x-2 px-2">
        {persons.map((person) => (
          <Avatar
            key={person.id}
            person={person}
            isGreenlit={greenlit.includes(person.id)}
            isRedlit={redlit.includes(person.id)}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  )
}
