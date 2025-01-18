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
  },
  {
    question: "How important is physical fitness to you?",
    options: [
      "Essential part of my daily routine",
      "Important but not obsessive",
      "I exercise when I can",
      "Not a priority for me"
    ]
  },
  {
    question: "What's your communication style?",
    options: [
      "Direct and to the point",
      "Thoughtful and detailed",
      "Emotional and expressive",
      "Reserved and private"
    ]
  },
  {
    question: "How do you prefer to spend your evenings?",
    options: [
      "Working on personal projects",
      "Watching movies or TV shows",
      "Going out with friends",
      "Reading or relaxing"
    ]
  },
  {
    question: "What's your ideal vacation?",
    options: [
      "Adventure travel and exploration",
      "Luxury resort relaxation",
      "Cultural immersion",
      "Staycation at home"
    ]
  },
  {
    question: "How do you make important decisions?",
    options: [
      "Trust my instincts",
      "Analyze all options carefully",
      "Seek advice from others",
      "Wait and see how things develop"
    ]
  },
  {
    question: "What's your approach to technology?",
    options: [
      "Early adopter of new tech",
      "Useful tool but not obsessed",
      "Only use what's necessary",
      "Prefer minimal technology"
    ]
  },
  {
    question: "How do you handle stress?",
    options: [
      "Exercise and physical activity",
      "Meditation and mindfulness",
      "Talk to friends or family",
      "Distract myself with entertainment"
    ]
  },
  {
    question: "What's your ideal living situation?",
    options: [
      "Urban apartment in the city center",
      "Suburban house with a yard",
      "Rural retreat in nature",
      "Flexible and mobile lifestyle"
    ]
  },
  {
    question: "How important is career success to you?",
    options: [
      "Top priority in my life",
      "Important but not everything",
      "Work-life balance is key",
      "Just a means to an end"
    ]
  },
  {
    question: "What's your social media usage?",
    options: [
      "Constantly connected",
      "Regular but not obsessive",
      "Minimal and selective",
      "Avoid it completely"
    ]
  },
  {
    question: "How do you approach learning new things?",
    options: [
      "Always seeking new knowledge",
      "When it's necessary for work",
      "Only for personal interests",
      "Prefer sticking to what I know"
    ]
  },
  {
    question: "What's your ideal social life?",
    options: [
      "Large circle of friends",
      "Small group of close friends",
      "One or two best friends",
      "Mostly solitary"
    ]
  },
  {
    question: "How do you handle change?",
    options: [
      "Embrace it enthusiastically",
      "Adapt when necessary",
      "Resist unless forced",
      "Prefer stability and routine"
    ]
  },
  {
    question: "What's your approach to health?",
    options: [
      "Strict diet and exercise",
      "Moderate and balanced",
      "Casual and relaxed",
      "Not a major concern"
    ]
  },
  {
    question: "How important is family to you?",
    options: [
      "Most important thing in life",
      "Very important but not everything",
      "Important but need independence",
      "Not a major factor in my life"
    ]
  },
  {
    question: "What's your creative outlet?",
    options: [
      "Art or music",
      "Writing or blogging",
      "Cooking or baking",
      "Don't have one"
    ]
  },
  {
    question: "How do you approach personal growth?",
    options: [
      "Constantly working on self-improvement",
      "Focus on specific areas when needed",
      "Let it happen naturally",
      "Not a priority for me"
    ]
  },
  {
    question: "What's your ideal work environment?",
    options: [
      "Fast-paced and challenging",
      "Structured and predictable",
      "Creative and flexible",
      "Relaxed and low-pressure"
    ]
  },
  {
    question: "How do you handle free time?",
    options: [
      "Plan activities in advance",
      "Go with the flow",
      "Spend time alone",
      "Socialize with others"
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
