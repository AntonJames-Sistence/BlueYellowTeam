'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donate2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [cause, setCause] = useState('');

    const childrenCause = (
        <div className='flex flex-col'>
          <h4 className="font-bold text-xl">Children</h4>
          <hr className="border-t border-gray-400 my-2 mx-4"></hr>
          <div
            className="flex h-32 w-full items-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-children.jpeg)` }}
          ></div>
        </div>
    )
    const MWCause = (
        <div className='flex flex-col'>
          <h4 className="font-bold text-xl">Medical Workers</h4>
          <hr className="border-t border-gray-400 my-2 mx-4"></hr>
          <div
            className="flex h-32 w-full items-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-medical-2.jpeg)` }}
          ></div>
        </div>
    )
    const DPCause = (
        <div className='flex flex-col'>
          <h4 className="font-bold text-xl">Displaced People</h4>
          <hr className="border-t border-gray-400 my-2 mx-4"></hr>
          <div
            className="flex h-32 w-full items-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(./causes-displaced.jpeg)` }}
          ></div>
        </div>
    )

    const questions = [
        {
            questionText: 'Who do you want to contribute to',
            answerOptions: [
                { answerText: childrenCause, nextQuestion: 1 },
                { answerText: MWCause, nextQuestion: 1 },
                { answerText: DPCause, nextQuestion: 1 },
            ],
        },
        {
            questionText: 'Ammount',
            answerOptions: [
                { answerText: '$20', nextQuestion: 2 },
                { answerText: '$50', nextQuestion: 2 },
                { answerText: '$100', nextQuestion: 2 },
                { answerText: 'Custom', nextQuestion: 2 },
            ],
        },
        {
            questionText: 'What payment method?',
            answerOptions: [
                { answerText: 'Card', nextQuestion: 0 },
                { answerText: 'Apple Pay', nextQuestion: 0 },
                { answerText: 'PayPal', nextQuestion: 0 },
            ],
        },
    ];

    const handleAnswerClick = (nextQuestion, option) => {
        if (nextQuestion !== null) {
            setCurrentQuestion(nextQuestion);
            console.log(option.answerText)
        } else {
            // Handle end of questions, can trigger an action or display a completion message
            console.log('End of questions');
        }
    };

    return (
        <div className="mx-auto my-8 p-4 w-full ">
            {questions.map((question, index) => (
                <div
                    key={index}
                    className={` border border-black w-full ${
                        index === currentQuestion
                            ? 'opacity-100 transition-opacity duration-1000 ease-in-out'
                            : 'opacity-0 pointer-events-none ease-in-out'
                    }`}
                >
                    <h2 className="text-2xl mb-4">{question.questionText}</h2>
                    <div className="answer-options flex flex-row">
                        {question.answerOptions.map((option, optionIndex) => (
                            <button
                                key={optionIndex}
                                className="bg-blue-500 text-white py-2 m-4 rounded-xl hover:bg-blue-600 transition-colors w-1/3 "
                                onClick={() => handleAnswerClick(option.nextQuestion, option)}
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