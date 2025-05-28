import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Palette, Heart, Target } from 'lucide-react';

const StyleQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const questions = [
    {
      id: 'style',
      title: 'What\'s Your Style?',
      subtitle: 'Help us understand your fashion preferences',
      icon: Palette,
      options: [
        { id: 'streetwear', label: 'Streetwear', emoji: '🔥', description: 'Bold, urban, trending' },
        { id: 'classic', label: 'Classic', emoji: '👔', description: 'Timeless, elegant, refined' },
        { id: 'athletic', label: 'Athletic', emoji: '⚡', description: 'Performance, sporty, active' },
        { id: 'minimal', label: 'Minimalist', emoji: '✨', description: 'Clean, simple, modern' }
      ]
    },
    {
      id: 'brands',
      title: 'Favorite Brands?',
      subtitle: 'Which brands do you love most?',
      icon: Heart,
      options: [
        { id: 'nike', label: 'Nike', emoji: '✓', description: 'Just Do It' },
        { id: 'adidas', label: 'Adidas', emoji: '⚡', description: 'Impossible is Nothing' },
        { id: 'jordan', label: 'Jordan', emoji: '🏀', description: 'Jumpman Legacy' },
        { id: 'newbalance', label: 'New Balance', emoji: '🏃', description: 'Made in USA' }
      ]
    },
    {
      id: 'colors',
      title: 'Color Preferences?',
      subtitle: 'What colors speak to you?',
      icon: Target,
      options: [
        { id: 'neutral', label: 'Neutral Tones', emoji: '🤍', description: 'Black, white, grey' },
        { id: 'bold', label: 'Bold Colors', emoji: '🌈', description: 'Bright, vibrant, loud' },
        { id: 'earth', label: 'Earth Tones', emoji: '🌿', description: 'Brown, tan, olive' },
        { id: 'pastel', label: 'Pastel Colors', emoji: '🌸', description: 'Soft, muted, gentle' }
      ]
    }
  ];

  const handleAnswerSelect = (questionId, optionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  const currentQuestion = questions[currentStep];
  const selectedAnswer = answers[currentQuestion?.id];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (!isQuizStarted) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Style 
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Quiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Take our quick style quiz to help us curate the perfect sneakers and accessories for your subscription box.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-white font-semibold mb-2">Personalized</h3>
                <p className="text-gray-400 text-sm">Get sneakers that match your unique style</p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-white font-semibold mb-2">Quick & Easy</h3>
                <p className="text-gray-400 text-sm">Only 3 questions, takes less than 2 minutes</p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-white font-semibold mb-2">Better Matches</h3>
                <p className="text-gray-400 text-sm">Improve your subscription experience</p>
              </motion.div>
            </div>

            <motion.button
              onClick={startQuiz}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-orange-500/40 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Style Quiz
              <ChevronRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Question {currentStep + 1} of {questions.length}</span>
            <span className="text-gray-400">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <currentQuestion.icon className="h-8 w-8 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {currentQuestion.title}
            </h2>
            <p className="text-lg text-gray-300">{currentQuestion.subtitle}</p>
          </motion.div>
        </AnimatePresence>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {currentQuestion.options.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                selectedAnswer === option.id
                  ? 'border-orange-500 bg-gradient-to-r from-orange-500/20 to-red-600/20'
                  : 'border-gray-700 bg-white/5 hover:border-gray-600 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {selectedAnswer === option.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center"
                >
                  <Check className="h-4 w-4 text-white" />
                </motion.div>
              )}

              <div className="flex items-center space-x-4">
                <div className="text-3xl">{option.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{option.label}</h3>
                  <p className="text-gray-400">{option.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <motion.button
            onClick={handlePrevious}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              currentStep === 0
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-white hover:bg-white/10 border border-gray-700'
            }`}
            disabled={currentStep === 0}
            whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Previous</span>
          </motion.button>

          <motion.button
            onClick={handleNext}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedAnswer
                ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-orange-500/40'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!selectedAnswer}
            whileHover={selectedAnswer ? { scale: 1.05 } : {}}
            whileTap={selectedAnswer ? { scale: 0.95 } : {}}
          >
            <span>{currentStep === questions.length - 1 ? 'Complete Quiz' : 'Next'}</span>
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default StyleQuiz;