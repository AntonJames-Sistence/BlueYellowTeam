'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donate2 = () => {
    const questions = [
        {
            questionText: 'Who do you want to contribute to',
            answerOptions: [
                { answerText: 'Children', nextQuestion: 1 },
                { answerText: 'Displaced', nextQuestion: 1 },
                { answerText: 'Medical Workers', nextQuestion: 1 },
            ],
        },
        {
            questionText: 'What payment method?',
            answerOptions: [
                { answerText: 'Card', nextQuestion: 2 },
                { answerText: 'Apple Pay', nextQuestion: 2 },
                { answerText: 'PayPal', nextQuestion: 2 },
            ],
        },
        {
            questionText: 'Ammount',
            answerOptions: [
                { answerText: '$20', nextQuestion: 0 },
                { answerText: '$50', nextQuestion: 0 },
                { answerText: '$100', nextQuestion: 0 },
                { answerText: 'Custom', nextQuestion: 0 },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerClick = (nextQuestion) => {
        if (nextQuestion !== null) {
            setCurrentQuestion(nextQuestion);
        } else {
            // Handle end of questions, can trigger an action or display a completion message
            console.log('End of questions');
        }
    };

    return (
        <div className="mx-auto my-8 p-4 max-w-md ">
            {questions.map((question, index) => (
                <div
                    key={index}
                    className={`fixed border border-black  ${
                        index === currentQuestion
                            ? 'opacity-100 transition-opacity duration-1000 ease-in-out'
                            : 'opacity-0 pointer-events-none ease-in-out'
                    }`}
                >
                    <h2 className="text-2xl mb-4">{question.questionText}</h2>
                    <div className="answer-options space-y-2">
                        {question.answerOptions.map((option, optionIndex) => (
                            <button
                                key={optionIndex}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                                onClick={() => handleAnswerClick(option.nextQuestion)}
                            >
                                {option.answerText}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Donate2;