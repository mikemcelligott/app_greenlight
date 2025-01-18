import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { submitQuizAnswers } from '../services/apiService'
import { quizQuestions } from '../data/quizQuestions'

export default function NewQuiz() {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const currentUserId = 1

  const handleAnswer = async (answer) => {
    const newAnswer = {
      questionId: currentQuestion,
      question: quizQuestions[currentQuestion].question,
      answer,
      timestamp: new Date().toISOString()
    }
    
    const updatedAnswers = [...answers, newAnswer]
    setAnswers(updatedAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsSubmitting(true)
      try {
        let ignoreServer = true;
        if (!ignoreServer) {
          await submitQuizAnswers(currentUserId, updatedAnswers)
        }
        navigate('/settings')
      } catch (error) {
        console.error('Failed to submit quiz answers:', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
    } else {
      navigate(-1)
    }
  }

  const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="pt-20 p-4 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <div className="flex items-center mb-4">
        <button
          onClick={handleBack}
          className="p-2 mr-2 text-white bg-green-600 hover:bg-green-700 rounded-full transition-colors"
        >
          <FaArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold">Compatibility Quiz</h2>
      </div>

      <div className="h-1 w-full bg-gray-200 rounded-full mb-6">
        <div 
          className="h-1 bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>
          <h3 className="text-xl font-bold mb-4">
            {quizQuestions[currentQuestion].question}
          </h3>
        </div>
        <div className="space-y-3">
          {quizQuestions[currentQuestion].options.map((option, index) => {
            const isSelected = answers[currentQuestion]?.answer === option
            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isSubmitting}
                className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                  isSelected
                    ? 'bg-green-600 text-white'
                    : 'bg-green-50 hover:bg-green-100 text-green-700'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        {currentQuestion === quizQuestions.length - 1 ? (
          'Last question!'
        ) : (
          `${quizQuestions.length - (currentQuestion + 1)} questions remaining`
        )}
      </div>
    </div>
  )
}
