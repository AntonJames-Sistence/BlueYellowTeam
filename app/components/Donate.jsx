"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import { 
  FaCcPaypal, 
  FaCcApplePay,  
  FaCreditCard, 
  FaDonate, 
  FaCalendarDay, 
  FaCalendarWeek, 
  FaArrowAltCircleLeft } from "react-icons/fa";
import { FaHandHoldingDollar, FaCalendarDays } from "react-icons/fa6";
import { causes } from "../../data/donateCauses";

const Donate = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [animateSlide, setAnimateSlide] = useState(false);

  const [cause, setCause] = useState("");
  const [trackAmount, setTrackAmount] = useState(null);
  const [trackerError, setTrackerError] = useState(false);
  const [amount, setAmount] = useState(null);
  const [interval, setInterval] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (interval !== null && amount !== null && cause !== "") {
      handleStripeCheckout();
    }
  }, [interval, cause, amount]);

  // choice 1
  const causeChoice = (
    <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
      {causes.map((cause) => (
        <button
          key={cause.id}
          className="bg-blue-500 text-white rounded-xl lg:hover:bg-blue-600 lg:hover:scale-110 ease-in-out duration-300 self-center md:self-auto w-[90%] md:w-full lg:w-1/2 shadow-custom"
          onClick={() => handleSlider(false, 2, cause.text)} // pass next question id and user answer
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col">
              <h4 className="font-semibold mt-2 md:mt-4 text-xl">{cause.text}</h4>
              <hr className="border-t border-gray-400 my-2 mx-4"></hr>
              <div
                className="h-32 w-4/5 md:w-[95%] lg:w-2/3 self-center bg-cover rounded-lg bg-no-repeat"
                style={{ backgroundImage: `url(${cause.image})` }}
              ></div>
              <hr className="border-t border-gray-400 my-2 mx-4"></hr>
            </div>
            <div className="px-8 pb-2 md:pb-4 text-sm text-justify lg:text-[15px] font-medium">{cause.description}</div>
          </div>
        </button>
      ))}
    </div>
  );

  // choice 2
  const paymentChoice = (
    <div className="w-full flex flex-col md:flex-row justify-center">
      <button
        className="flex flex-row justify-center bg-blue-500 text-white m-4 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-2/3 self-center lg:w-full md:w-1/4 shadow-custom"
        onClick={() => handleSlider(false, 3, "Card")}
      >
        <FaCreditCard className="mr-2 text-2xl" />
        <p>Card</p>
      </button>
      <button
        className="flex flex-row justify-center bg-blue-500 text-white m-4 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-2/3 self-center lg:w-full md:w-1/4 shadow-custom"
        onClick={() => handleSlider(false, 3, "AppleGoogle")}
      >
        <FaCcApplePay className="mr-2 text-2xl" />
        <p>ApplePay / GooglePay</p>
      </button>
      <button
        className="flex flex-row justify-center bg-blue-500 text-white m-4 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-2/3 self-center lg:w-full md:w-1/4 shadow-custom"
        onClick={() => handleSlider(false, 3, "PayPal")}
      >
        <FaCcPaypal className="mr-2 text-2xl" />
        <p>PayPal</p>
      </button>
    </div>
  );

  // choice 3
  const amountChoice = (
    <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-4 justify-center justify-items-center">
      <button
        className="flex flex-row justify-center bg-blue-500 text-white m-3 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-2/3 self-center lg:w-2/3 md:w-2/4 justify-self-end shadow-custom"
        onClick={() => handleSlider(false, 4, 20)}
      >
        <FaHandHoldingDollar className="mr-2 text-2xl" />
        <p>20</p>
      </button>
      <button
        className="flex flex-row justify-center bg-blue-500 text-white m-3 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-2/3 self-center lg:w-2/3 md:w-2/4 justify-self-start shadow-custom"
        onClick={() => handleSlider(false, 4, 50)}
      >
        <FaHandHoldingDollar className="mr-2 text-2xl" />
        <p>50</p>
      </button>
      <button
        className="flex flex-row justify-center bg-blue-500 text-white m-3 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-2/3 self-center lg:w-2/3 md:w-2/4 justify-self-end shadow-custom"
        onClick={() => handleSlider(false, 4, 100)}
      >
        <FaHandHoldingDollar className="mr-2 text-2xl" />
        <p>100</p>
      </button>
      <div className="flex self-center flex-row justify-self-start md:ml-3 lg:m-3 w-2/3 md:w-2/4 lg:w-2/3">
        <input
          type="number"
          min="1"
          value={trackAmount === null ? "" : trackAmount}
          onChange={(e) => setTrackAmount(e.target.value)}
          className={`bg-white border ${trackerError ? 'border-red-500' : 'border-gray-300'} rounded-l-xl px-3 w-1/2 self-center h-[48px]`}
          placeholder="Amount"
        />
        <button
          className="bg-blue-500 text-white my-4 py-3 md:py-2 rounded-r-xl hover:bg-blue-600 w-1/2 h-[48px]"
          onClick={() =>
            trackAmount > 0
              ? [handleSlider(false, 4, trackAmount), setTrackerError(false)]
              : setTrackerError(true)
          }
        >
          Custom
        </button>
      </div>
    </div>
  );

  const subscriptionChoice = (
    <div className="fle flex-col justify-center">
      <div className="w-full flex flex-row justify-center md:mb-8 ">
        <button
          className="flex flex-row justify-center bg-blue-500 text-white my-4 py-3 md:m-4 md:p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-3/5 md:w-1/4 shadow-custom self-center"
          onClick={() => handleSlider(false, 1, false)}
        >
          <FaDonate className="mr-2 text-2xl" />
          <p>One time Donation</p>
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center">
        <button
          className="flex flex-row justify-center bg-blue-500 text-white my-4 py-3 md:m-4 md:p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-3/5 md:w-1/4 shadow-custom self-center"
          onClick={() => handleSlider(false, 1, "day")}
        >
          <FaCalendarDay className="mr-2 text-2xl" />
          <p>Daily Subscription</p>
        </button>
        <button
          className="flex flex-row justify-center bg-blue-500 text-white my-4 py-3 md:m-4 md:p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-3/5 md:w-1/4 shadow-custom self-center"
          onClick={() => handleSlider(false, 1, "month")}
        >
          <FaCalendarWeek className="mr-2 text-2xl" />
          <p>Monthly Subscription</p>
        </button>
        <button
          className="flex flex-row justify-center bg-blue-500 text-white my-4 py-3 md:m-4 md:p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-3/5 md:w-1/4  shadow-custom self-center"
          onClick={() => handleSlider(false, 1, "year")}
        >
          <FaCalendarDays className="mr-2 text-2xl" />
          <p>Yearly Subscription</p>
        </button>
      </div>
    </div>
  );

  const handleStripeCheckout = async () => {
    setLoading(true);
    const { data } = await axios.post(
      "/api/checkout",
      {
        amount: amount,
        name: `Donate to ${cause}`,
        interval: interval,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.assign(data);
  };

  const handleAnswerClick = (nextQuestion, answer) => {
    switch (currentQuestion) {
      case 1: // cause
        setCause(answer);
        setCurrentQuestion(nextQuestion);
        break;
      case 2: // payment method
        if (answer === "PayPal") {
          setLoading(true);
          window.location.href =
            "https://www.paypal.com/donate/?hosted_button_id=6S6S2484WWCKN";
        } else {
          setCurrentQuestion(nextQuestion);
        }
        break;
      case 3: // amount
        setAmount(answer);
        setCurrentQuestion(nextQuestion);
        break;
      case 4: // subscription & last question
        setInterval(answer);
        setCurrentQuestion(nextQuestion);
        break;
      default:
        break;
    }
  };

  const handleSlider = (reverse, questionNumber, answer) => {
    // Trigger the slide animation when moving to the next question
    // Reset the animation state after a delay to prepare for the next slide
    // Adjust the delay to match your transition duration
    if (reverse) {
      setAnimateSlide("slide-exit-reverse");

      setTimeout(() => {
        handleAnswerClick(questionNumber, null);
        setAnimateSlide("slide-enter-reverse");
      }, 500);
    } else {
      setAnimateSlide("slide-exit");

      setTimeout(() => {
        handleAnswerClick(questionNumber, answer);
        setAnimateSlide("slide-enter");
      }, 500);
    }
  };

  const renderQuestion = () => {
    return (
      <div
        className={`question-container flex flex-col justify-center w-full lg:w-4/5 ${animateSlide}`}
      >
        {currentQuestion === 1 && (
          <div>
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 lg:mb-8">
              For what cause do you want to donate?
            </h2>
            {causeChoice}
          </div>
        )}
        {currentQuestion === 2 && (
          <div>
            <h2 className="text-center text-[28px] lg:text-3xl font-bold mb-10 lg:mb-8">
              Select payment method
            </h2>
            {paymentChoice}
          </div>
        )}
        {currentQuestion === 3 && (
          <div>
            <h2 className="text-center text-[28px] lg:text-3xl font-bold mb-10 lg:mb-8">
              Select amount
            </h2>
            {amountChoice}
              <div className={`text-red-500 text-center h-0 ${
                trackerError ? 'visible' : 'hidden'}`}
                >
                Custom amount has to be greater than 0
              </div>
          </div>
        )}
        {currentQuestion === 4 && (
          <div>
            <h2 className="text-center text-[28px] lg:text-3xl font-bold mb-10 lg:mb-8">
              Would you like to make it a subscription?
            </h2>
            {subscriptionChoice}
          </div>
        )}
      </div>
    );
  };

  const renderNavigationCircles = () => {
    return (
      <div className="flex justify-center">
        {[1, 2, 3, 4].map((questionNumber) => (
          <div
            key={questionNumber}
            className={`h-4 w-4 rounded-full mx-2 ${
              currentQuestion === questionNumber ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  const renderNavigationArrows = () => {
    return (
      <div className="flex justify-between mt-4">
        <button
          disabled={currentQuestion === 1}
          onClick={() => handleSlider(true, currentQuestion - 1)}
          className={`absolute top-8 lg:top-7 text-gray-300 text-2xl ease-in-out duration-300 ${
            currentQuestion === 1
              ? "cursor-not-allowed invisible"
              : "hover:text-blue-500"
          }`}
        >
          <FaArrowAltCircleLeft className="text-4xl" />
        </button>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-[50vh] lg:h-[70vh]">
          <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="absolute">Loading</div>
        </div>
      ) : (
        <div className="relative w-full min-h-[40vh] lg:min-h-[70vh] flex justify-center last:mb-4 md:last:mb-8 lg:last:mb-0">
          {renderQuestion()}

          <div className="absolute -bottom-10  left-0 right-0 flex justify-center">
            <div className="flex items-center">{renderNavigationCircles()}</div>
          </div>
          <div className="absolute top-[20vh] md:top-[18vh] lg:top-60 left-0 right-0 flex justify-between px-4">
            {renderNavigationArrows()}
          </div>
        </div>
      )}
    </>
  );
};

export default Donate;
