'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./main.css";

const Donate2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [cause, setCause] = useState('');
    const [amount, setAmount] = useState(0);
    const [method, setMethod] = useState('');

    const childrenCause = (
        <div className='flex flex-col'>
          <h4 className="font-bold text-xl mt-2">Children</h4>
          <hr className="border-t border-gray-400 my-2 mx-4"></hr>
          <div
            className="flex h-32 w-full items-center bg-cover bg-no-repeat mb-4"
            style={{ backgroundImage: `url(./causes-children.jpeg)` }}
          ></div>
        </div>
    )
    const MWCause = (
        <div className='flex flex-col'>
          <h4 className="font-bold text-xl mt-2">Medical Workers</h4>
          <hr className="border-t border-gray-400 my-2 mx-4"></hr>
          <div
            className="flex h-32 w-full items-center bg-cover bg-no-repeat mb-4"
            style={{ backgroundImage: `url(./causes-medical-2.jpeg)` }}
          ></div>
        </div>
    )
    const DPCause = (
        <div className='flex flex-col'>
          <h4 className="font-bold text-xl mt-2">Displaced People</h4>
          <hr className="border-t border-gray-400 my-2 mx-4"></hr>
          <div
            className="flex h-32 w-full items-center bg-cover bg-no-repeat mb-4"
            style={{ backgroundImage: `url(./causes-displaced.jpeg)` }}
          ></div>
        </div>
    )

    const questions = [
        {
            questionText: 'What cause do you want to donate?',
            answerOptions: [
                { answerText: childrenCause, nextQuestion: 1, answer: 'Children' },
                { answerText: MWCause, nextQuestion: 1, answer: 'Medical Workers' },
                { answerText: DPCause, nextQuestion: 1, answer: 'Displaced People' },
            ],
        },
        {
            questionText: 'Amount',
            answerOptions: [
                { answerText: '$20', nextQuestion: 2, answer: 20 },
                { answerText: '$50', nextQuestion: 2, answer: 50 },
                { answerText: '$100', nextQuestion: 2, answer: 100 },
                { answerText: 'Custom', nextQuestion: 2, answer: 100 }, //change
            ],
        },
        {
            questionText: 'What payment method?', // for now it is looped, change later
            answerOptions: [
                { answerText: 'Card', nextQuestion: 0, answer: 'Stripe' },
                { answerText: 'Apple Pay', nextQuestion: 0, answer: 'Mobile' },
                { answerText: 'PayPal', nextQuestion: 0, answer: 'PayPal' },
            ],
        },
    ];

    const handleAnswerClick = (nextQuestion, answer) => {
        if (currentQuestion === 0) {
            setCause(answer);
            setCurrentQuestion(nextQuestion);
        } else if (currentQuestion === 1) {
            setAmount(answer);
            setCurrentQuestion(nextQuestion);
        } else if (currentQuestion === 2) {
            setMethod(answer);
            setCurrentQuestion(nextQuestion);
        } else {
            // Handle end of questions, can trigger an action or display a completion message
            console.log('End of questions');
        }
    };

    // useEffect(() => {
    //     console.log('Cause:', cause);
    //     console.log('Amount:', amount);
    //     console.log('Method:', method);
    // }, [cause, amount, method]);

    return (
        <div className="mx-auto my-8 p-4 w-full">
            {questions.map((question, index) => (
            <div
                key={index}
                className={`w-full ${
                index === currentQuestion
                    ? 'slide-in-right-enter slide-in-right-enter-active'
                    : 'slide-in-right-exit slide-in-right-exit-active'
                } transition-opacity duration-500 ease-in-out`}
            >
                <h2 className="text-2xl mb-4 text-center">{question.questionText}</h2>
                <div className="answer-options flex flex-row">
                {question.answerOptions.map((option, optionIndex) => (
                    <button
                    key={optionIndex}
                    className="bg-blue-500 text-white m-4 rounded-xl hover:bg-blue-600 transition-colors w-1/3"
                    onClick={() => handleAnswerClick(option.nextQuestion, option.answer)}
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