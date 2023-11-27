'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donate2 = () => {
    const questions = [
        {
            questionText: 'What is your favorite color?',
            answerOptions: [
                { answerText: 'Blue', nextQuestion: 1 },
                { answerText: 'Red', nextQuestion: 1 },
                { answerText: 'Green', nextQuestion: 1 },
            ],
        },
        {
            questionText: 'What is your favorite animal?',
            answerOptions: [
                { answerText: 'Dog', nextQuestion: 2 },
                { answerText: 'Cat', nextQuestion: 2 },
                { answerText: 'Bird', nextQuestion: 2 },
            ],
        },
        {
            questionText: 'Which season do you prefer?',
            answerOptions: [
                { answerText: 'Summer', nextQuestion: 0 },
                { answerText: 'Winter', nextQuestion: 0 },
                { answerText: 'Spring', nextQuestion: 0 },
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
        <div className="mx-auto my-8 p-4 max-w-md opacity-100">
            <h2
                key={currentQuestion}
                className="text-2xl mb-4 opacity-100 transition-opacity duration-500"
            >
                {questions[currentQuestion]?.questionText}
            </h2>

            <div className="answer-options space-y-2">
                {questions[currentQuestion]?.answerOptions.map((option, index) => (
                    <button
                        key={index}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                        onClick={() => handleAnswerClick(option.nextQuestion)}
                    >
                        {option.answerText}
                    </button>
                ))}
            </div>

            {/* Hide the previous question while transitioning to the new question */}
            {currentQuestion > 0 && (
                <h2
                    key={currentQuestion - 1}
                    className="text-2xl mb-4 opacity-0 transition-opacity duration-500 absolute opacity-0"
                >
                    {questions[currentQuestion - 1].questionText}
                </h2>
            )}
        </div>
    );
};

export default Donate2;