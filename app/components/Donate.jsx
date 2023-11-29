'use client';

import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import "./main.css";

const Donate = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const [cause, setCause] = useState('');
    const [trackAmount, setTrackAmount] = useState(null);
    const [amount, setAmount] = useState(null);
    const [method, setMethod] = useState('');
    const [subscription, setSubscription] = useState(false);
    const [interval, setInterval] = useState('');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(method, amount)
        if (method === 'Card' && amount !== null) {
            handleStripeCheckout();
        }
    }, [amount, method]);

    const causes = [
        {
            id: 1,
            text: 'Children',
            image: './causes-children.jpeg'
        },
        {
            id: 2,
            text: 'Medical Workers',
            image: './causes-medical-2.jpeg'
        },
        {
            id: 3,
            text: 'Displaced People',
            image: './causes-displaced.jpeg'
        },
    ]

    const causeChoice = (
        <div className='flex flex-row justify-center w-full'>
            {causes.map((cause) => (
                <button
                    key={cause.id}
                    className="bg-blue-500 text-white m-4 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-1/4 shadow-custom"
                    onClick={() => handleAnswerClick(2, cause.text)} // pass next question id and user answer
                >
                    <div className=''>
                        <div className='flex flex-col'>
                        <h4 className="font-bold mt-2">{cause.text}</h4>
                        <hr className="border-t border-gray-400 my-2 mx-20"></hr>
                        <div
                            className="flex h-32 w-2/3 self-center bg-cover rounded-lg bg-no-repeat mb-4"
                            style={{ backgroundImage: `url(${cause.image})` }}
                        ></div>
                        </div>
                    </div>
                </button>
            )) }
        </div>
    )

    const paymentChoice = (
        <div className='w-full flex flex-row justify-center'>
            <button className="bg-blue-500 text-white m-4 p-2 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-1/4 shadow-custom"
                    onClick={() => handleAnswerClick(3, 'Card')}>Card
            </button>
            <button className="bg-blue-500 text-white m-4 p-2 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-1/4 shadow-custom"
                    onClick={() => handleAnswerClick(3, 'AppleGoogle')}>ApplePay / GooglePay
            </button>
            <button className="bg-blue-500 text-white m-4 p-2 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-1/4 shadow-custom"
                    onClick={() => handleAnswerClick(3, 'PayPal')}>PayPal
            </button>
        </div>
    )

    const amountChoice = (
        <div className='w-full flex flex-row justify-center'>
            <button className="bg-blue-500 text-white m-4 p-2 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-1/4 shadow-custom"
                    onClick={() => handleAnswerClick(1, 20)}>$20
            </button>
            <button className="bg-blue-500 text-white m-4 p-2 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-1/4 shadow-custom"
                    onClick={() => handleAnswerClick(1, 50)}>$50
            </button>
            <button className="bg-blue-500 text-white m-4 p-2 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-1/4 shadow-custom"
                    onClick={() => handleAnswerClick(1, 100)}>$100
            </button>
            <div className='flex flex-row w-1/4 '>
                <input
                    type="number"
                    value={trackAmount === null ? '' : trackAmount}
                    onChange={(e) => setTrackAmount(e.target.value)}
                    className="bg-white border border-gray-300 rounded-l-xl px-3 w-1/2 self-center h-[40px]"
                    placeholder="Enter Amount"
                />
                <button
                    className="bg-blue-500 text-white my-4 rounded-r-xl hover:bg-blue-600 w-1/2"
                    onClick={() => handleAnswerClick(1, trackAmount)}>Custom
                </button>
            </div>
        </div>
    )

    const choices = [
        {
            id: 1,
            choiceHeader: 'What cause do you want to donate?',
            dedicatedBlock: causeChoice,
            nextChoiceId: 2,
        },
        {
            id: 2,
            choiceHeader: 'What payment method?',
            dedicatedBlock: paymentChoice,
            nextChoiceId: 3,
        },
        {
            id: 3,
            choiceHeader: 'Please select amount',
            dedicatedBlock: amountChoice,
            nextChoiceId: 1,
        },
    ]

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
            case 1:
                setCause(answer);
                setCurrentQuestion(nextQuestion);
                break;
            case 2:
                setMethod(answer);
                if (answer === 'PayPal') {
                    setLoading(true);
                    window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=6S6S2484WWCKN';
                } else {
                    setCurrentQuestion(nextQuestion);
                }
                break;
            case 3: // last question
                setAmount(answer);
                setCurrentQuestion(nextQuestion);
                break;
            default:
                break;
        }
    };

    const renderQuestion = () => {
        switch (currentQuestion) {
            case 1:
                return (
                    <CSSTransition
                        in={currentQuestion === 1}
                        timeout={500}
                        classNames="slide-in-right"
                        unmountOnExit
                    >
                        <div>
                            <h2 className="text-center text-xl font-bold mt-4 mb-8">
                                What cause do you want to donate?
                            </h2>
                            {causeChoice}
                        </div>
                    </CSSTransition>
                );
            case 2:
                return (
                    <CSSTransition
                        in={currentQuestion === 2}
                        timeout={500}
                        classNames="slide-in-right"
                        unmountOnExit
                    >
                        <div>
                            <h2 className="text-center text-xl font-bold mt-4 mb-8">
                                What payment method?
                            </h2>
                            {paymentChoice}
                        </div>
                    </CSSTransition>
                );
            case 3:
                return (
                    <CSSTransition
                        in={currentQuestion === 3}
                        timeout={500}
                        classNames="slide-in-right"
                        unmountOnExit
                    >
                        <div>
                            <h2 className="text-center text-xl font-bold mt-4 mb-8">
                                Please select amount
                            </h2>
                            {amountChoice}
                        </div>
                    </CSSTransition>
                );
            default:
                return null;
        }
    };

    return (
        <>{loading ? (
            <div className="flex items-center justify-center h-[80vh]">
                <div className="spinner"></div>
            </div>
            ) : (renderQuestion())}
        </>
    );
};

export default Donate;