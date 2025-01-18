import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Avatar from './components/Avatar'
import Settings from './components/Settings'
import NewQuiz from './components/NewQuiz'
import { persons } from './data/persons'
import { updateUserState } from './services/apiService'

function MainScreen() {
  const [greenlit, setGreenlit] = useState([])
  const [redlit, setRedlit] = useState([])
  const currentUserId = 1

  const handleClick = async (id, action) => {
    let newGreenlit = [...greenlit]
    let newRedlit = [...redlit]
    let state = ''

    if (action === 'redlit') {
      if (redlit.includes(id)) {
        newRedlit = redlit.filter(rId => rId !== id)
        state = ''
      } else {
        newRedlit = [...redlit, id]
        newGreenlit = greenlit.filter(gId => gId !== id)
        state = 'R'
      }
    } else {
      if (greenlit.includes(id)) {
        newGreenlit = greenlit.filter(gId => gId !== id)
        state = ''
      } else if (redlit.includes(id)) {
        newRedlit = redlit.filter(rId => rId !== id)
        state = ''
      } else {
        newGreenlit = [...greenlit, id]
        newRedlit = redlit.filter(rId => rId !== id)
        state = 'G'
      }
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
        <Route path="/quiz" element={<NewQuiz />} />
      </Routes>
    </div>
  )
}
