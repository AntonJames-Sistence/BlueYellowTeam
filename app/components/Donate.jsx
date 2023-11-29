'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./main.css";

const Donate = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [cause, setCause] = useState('');
    const [trackAmount, setTrackAmount] = useState(null);
    const [amount, setAmount] = useState(null);
    const [method, setMethod] = useState('');
    const [subscription, setSubscription] = useState(false);
    const [interval, setInterval] = useState('');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (method === 'Stripe' && amount !== null) {
            handleStripeCheckout();
        }
    }, [amount, method]);

    const causes = [
        {
            text: 'Children',
            image: './causes-children.jpeg'
        },
        {
            text: 'Medical Workers',
            image: './causes-medical-2.jpeg'
        },
        {
            text: 'Displaced People',
            image: './causes-displaced.jpeg'
        },
    ]



    const causeChoice = (
        <div className='mt-8 flex flex-row justify-center'>
            {causes.map((cause) => (
                <button
                key={cause.id}
                className="bg-blue-500 text-white m-4 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-1/4 shadow-custom min-h-[40px]"
                onClick={() => handleAnswerClick(2, cause.text)} // pass next question id and user answer
                >
                    <div className='flex flex-col'>
                    <h4 className="font-bold mt-2">{cause.text}</h4>
                    <hr className="border-t border-gray-400 my-2 mx-20"></hr>
                    <div
                        className="flex h-32 w-2/3 self-center bg-cover rounded-lg bg-no-repeat mb-4"
                        style={{ backgroundImage: `url(${cause.image})` }}
                    ></div>
                    </div>
                </button>
            )) }
        </div>
    )

    // const questions = [
    //     {
    //         questionText: 'What cause do you want to donate?',
    //         answerOptions: [
    //             { answerText: childrenCause, nextQuestion: 1, answer: 'Children' },
    //             { answerText: MWCause, nextQuestion: 1, answer: 'Medical Workers' },
    //             { answerText: DPCause, nextQuestion: 1, answer: 'Displaced People' },
    //         ],
    //     },
    //     {
    //         questionText: 'What payment method?', // for now it is looped, change later
    //         answerOptions: [
    //             { answerText: 'Bank Card', nextQuestion: 2, answer: 'Stripe' },
    //             { answerText: 'ApplePay / GooglePay', nextQuestion: 2, answer: 'Mobile' },
    //             { answerText: 'PayPal', nextQuestion: 2, answer: 'PayPal' },
    //         ],
    //     },
    //     {
    //         questionText: 'Amount',
    //         answerOptions: [
    //             { answerText: '$20', nextQuestion: 0, answer: 20 },
    //             { answerText: '$50', nextQuestion: 0, answer: 50 },
    //             { answerText: '$100', nextQuestion: 0, answer: 100 },
    //             { answerText: 'Custom', nextQuestion: 0, answer: null },
    //         ],
    //     },
    // ];

    // ===================================================

    const choices = [
        {
            id: 1,
            choiceHeader: '',
            dedicatedBlock: null,
            nextChoiceId: 2,
        },
        {
            id: 2,
            choiceHeader: '',
            dedicatedBlock: null,
            nextChoiceId: 3,
        },
        {
            id: 3,
            choiceHeader: '',
            dedicatedBlock: null,
            nextChoiceId: 4,
        },
        {
            id: 4,
            choiceHeader: '',
            dedicatedBlock: null,
            nextChoiceId: 1,
        },
    ]

    // ===================================================

    const handleStripeCheckout = async () => {
        setLoading(true);
        const { data } = await axios.post(
            '/api/checkout',
            {
                amount: amount,
                name: `Donate to ${cause}`,
                subscription: subscription,
                interval: interval,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        window.location.assign(data);
    };

    const handleAnswerClick = (nextQuestion, answer) => {
        switch (currentQuestion) {
            case 0:
                setCause(answer);
                setCurrentQuestion(nextQuestion);
                break;
            case 1:
                setMethod(answer);
                if (answer === 'PayPal') {
                    setLoading(true);
                    window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=6S6S2484WWCKN';
                } else {
                    setCurrentQuestion(nextQuestion);
                }
                break;
            case 2: // last question
                setAmount(answer);
                setCurrentQuestion(nextQuestion);
                break;
            default:
                break;
        }
    };

    return (
        causeChoice
    );
};

export default Donate;

{/* <div className="p-4 w-full">
            {loading ? (
                <div className="flex items-center justify-center h-[80vh]">
                    <div className="spinner"></div>
                </div>
            ) : 
            (questions.map((question, index) => (
                <div
                    key={index}
                    className={`w-full my-8 ${
                    index === currentQuestion
                        ? 'slide-in-right-enter slide-in-right-enter-active'
                        : 'slide-in-right-exit slide-in-right-exit-active'
                    } transition-opacity duration-700 ease-in-out`}
                >
                <h2 className="text-2xl mb-4 font-bold text-center">{question.questionText}</h2>
                <div className="answer-options flex flex-row justify-center">
                {question.answerOptions.map((option, optionIndex) => (
                    <React.Fragment key={optionIndex}>
                        {option.answerText === 'Custom' ? (
                            <div className='flex flex-row w-1/4 '>
                            <input
                                type="number"
                                value={trackAmount === null ? '' : trackAmount}
                                onChange={(e) => setTrackAmount(e.target.value)}
                                className="bg-white border border-gray-300 rounded-l-xl px-3 w-1/2 self-center h-[40px]"
                                placeholder="Enter Amount"
                            />
                            <button
                                className="bg-blue-500 text-white my-4 rounded-r-xl hover:bg-blue-600 w-1/2 min-h-[40px]"
                                onClick={() => handleAnswerClick(option.nextQuestion, trackAmount)}
                            >
                                {option.answerText}
                            </button>
                            </div>
                        ) : (
                            <button
                            key={optionIndex}
                            className="bg-blue-500 text-white m-4 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-1/4 shadow-custom min-h-[40px]"
                            onClick={() => handleAnswerClick(option.nextQuestion, option.answer)}
                            >
                            {option.answerText}
                            </button>
                        )}
                    </React.Fragment>
                ))}
                </div>
            </div>
            )))}
        </div>
    
        const childrenCause = (
        <div className='flex flex-col'>
          <h4 className="font-bold mt-2">{causes[0].text}</h4>
          <hr className="border-t border-gray-400 my-2 mx-20"></hr>
          <div
            className="flex h-32 w-2/3 self-center bg-cover rounded-lg bg-no-repeat mb-4"
            style={{ backgroundImage: `url(${causes[0].image})` }}
          ></div>
        </div>
    )
    const MWCause = (
        <div className='flex flex-col'>
          <h4 className="font-bold mt-2">{causes[1].text}</h4>
          <hr className="border-t border-gray-400 my-2 mx-20"></hr>
          <div
            className="flex h-32 w-2/3 self-center bg-cover rounded-lg bg-no-repeat mb-4"
            style={{ backgroundImage: `url(${causes[1].image})` }}
          ></div>
        </div>
    )
    const DPCause = (
        <div className='flex flex-col'>
          <h4 className="font-bold mt-2">{causes[2].text}</h4>
          <hr className="border-t border-gray-400 my-2 mx-20"></hr>
          <div
            className="flex h-32 w-2/3 self-center bg-cover rounded-lg bg-no-repeat mb-4"
            style={{ backgroundImage: `url(${causes[2].image})` }}
          ></div>
        </div>
    ) */}