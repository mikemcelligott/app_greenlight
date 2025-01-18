import React, { useState } from 'react'
    import { FaArrowLeft } from 'react-icons/fa'
    import { useNavigate } from 'react-router-dom'

    const questions = [
      {
        question: "What's your idea of a perfect weekend?",
        options: [
          "Adventure and outdoor activities",
          "Relaxing at home with a good book",
          "Socializing with friends",
          "Exploring new restaurants and cafes"
        ]
      },
      {
        question: "How do you handle conflict?",
        options: [
          "Address it directly and immediately",
          "Take time to cool off before discussing",
          "Avoid confrontation if possible",
          "Seek mediation from a third party"
        ]
      },
      {
        question: "What's your approach to finances?",
        options: [
          "Save as much as possible",
          "Spend on experiences rather than things",
          "Balance saving and spending",
          "Live for today, worry about tomorrow later"
        ]
      }
    ]

    export default function Quiz() {
      const navigate = useNavigate()
      const [currentQuestion, setCurrentQuestion] = useState(0)
      const [answers, setAnswers] = useState([])

      const handleAnswer = (answer) => {
        setAnswers([...answers, answer])
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
        } else {
          // Quiz complete - you can add submission logic here
          navigate('/settings')
        }
      }

      return (
        <div className="p-4 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
          <div className="flex items-center mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 mr-2 text-green-700 hover:bg-green-100 rounded-full transition-colors"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold">Compatibility Quiz</h2>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <h3 className="text-xl font-bold mb-4">
                {questions[currentQuestion].question}
              </h3>
            </div>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left bg-green-50 hover:bg-green-100 text-green-700 py-2 px-4 rounded-lg transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    }
