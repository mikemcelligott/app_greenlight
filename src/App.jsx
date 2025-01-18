import React, { useState } from 'react'
    import { Routes, Route } from 'react-router-dom'
    import Header from './components/Header'
    import Avatar from './components/Avatar'
    import Settings from './components/Settings'
    import Quiz from './components/Quiz'

    const people = [
      { id: 1, name: 'Alex', avatar: 'https://i.pravatar.cc/150?img=1', compatibility: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : null },
      { id: 2, name: 'Jordan', avatar: 'https://i.pravatar.cc/150?img=2', compatibility: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : null },
      { id: 3, name: 'Taylor', avatar: 'https://i.pravatar.cc/150?img=3', compatibility: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : null },
      { id: 4, name: 'Casey', avatar: 'https://i.pravatar.cc/150?img=4', compatibility: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : null },
    ]

    function MainScreen() {
      const [greenlit, setGreenlit] = useState([])
      const [redlit, setRedlit] = useState([])

      const handleClick = (id) => {
        if (greenlit.includes(id)) {
          setGreenlit(greenlit.filter(gId => gId !== id))
          setRedlit([...redlit, id])
        } else if (redlit.includes(id)) {
          setRedlit(redlit.filter(rId => rId !== id))
        } else {
          setGreenlit([...greenlit, id])
        }
      }

      return (
        <div className="p-4 pt-8 min-h-screen bg-gradient-to-br from-white to-gray-100">
          <div className="grid grid-cols-3 gap-[10%]">
            {people.map((person) => (
              <Avatar
                key={person.id}
                person={person}
                isGreenlit={greenlit.includes(person.id)}
                isRedlit={redlit.includes(person.id)}
                onClick={() => handleClick(person.id)}
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
