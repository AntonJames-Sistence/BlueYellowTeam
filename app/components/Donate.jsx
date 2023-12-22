"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faCreditCard,
  faDollarSign,
  faHandHoldingDollar,
  faCalendarDay,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcApplePay,
  faCcPaypal,
  faGooglePay,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
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
          className="bg-blue-500 text-white rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-full md:w-1/4 shadow-custom"
          onClick={() => handleSlider(false, 2, cause.text)} // pass next question id and user answer
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col">
              <h4 className="font-bold mt-4 text-xl">{cause.text}</h4>
              <hr className="border-t border-gray-400 my-2 mx-4"></hr>
              <div
                className="h-32 w-2/3 self-center bg-cover rounded-lg bg-no-repeat"
                style={{ backgroundImage: `url(${cause.image})` }}
              ></div>
              <hr className="border-t border-gray-400 my-2 mx-4"></hr>
            </div>
            <div className="px-4 pb-4 text-sm">{cause.description}</div>
          </div>
        </button>
      ))}
    </div>
  );

  // choice 2
  const paymentChoice = (
    <div className="w-full flex flex-col md:flex-row justify-center">
      <button
        className="bg-blue-500 text-white m-4 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-full md:w-1/4 shadow-custom"
        onClick={() => handleSlider(false, 3, "Card")}
      >
        <FontAwesomeIcon icon={faCreditCard} className="mr-2 fa-xl" />
        Card
      </button>
      <button
        className="bg-blue-500 text-white m-4 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-full md:w-1/4 shadow-custom"
        onClick={() => handleSlider(false, 3, "AppleGoogle")}
      >
        <FontAwesomeIcon icon={faCcApplePay} className="mr-2 fa-xl" />
        ApplePay / GooglePay
        <FontAwesomeIcon icon={faGooglePay} className="ml-2 fa-2xl" />
      </button>
      <button
        className="bg-blue-500 text-white m-4 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-full md:w-1/4 shadow-custom"
        onClick={() => handleSlider(false, 3, "PayPal")}
      >
        <FontAwesomeIcon icon={faCcPaypal} className="mr-2 fa-xl" />
        PayPal
      </button>
    </div>
  );

  // choice 3
  const amountChoice = (
    <div className="w-full flex flex-col md:flex-row justify-center">
      <button
        className="bg-blue-500 text-white m-4 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-full md:w-1/4 shadow-custom"
        onClick={() => handleSlider(false, 4, 20)}
      >
        <FontAwesomeIcon icon={faDollarSign} className="mr-2 fa-xl" />
        20
      </button>
      <button
        className="bg-blue-500 text-white m-4 p-2 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300  w-full md:w-1/4 shadow-custom"
        onClick={() => handleSlider(false, 4, 50)}
      >
        <FontAwesomeIcon icon={faDollarSign} className="mr-2 fa-xl" />
        50
      </button>
      <button
        className="bg-blue-500 text-white m-4 p-2 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300  w-full md:w-1/4 shadow-custom"
        onClick={() => handleSlider(false, 4, 100)}
      >
        <FontAwesomeIcon icon={faDollarSign} className="mr-2 fa-xl" />
        100
      </button>
      <div className="flex flex-row w-full mx-4 md:m-0 md:w-1/4">
        <input
          type="number"
          min="1"
          value={trackAmount === null ? "" : trackAmount}
          onChange={(e) => setTrackAmount(e.target.value)}
          className="bg-white border border-gray-300 rounded-l-xl px-3 w-1/2 self-center h-[48px]"
          placeholder="Amount"
        />
        <button
          className="bg-blue-500 text-white my-4 py-3 md:py-2 rounded-r-xl hover:bg-blue-600 w-1/2"
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
          className="bg-blue-500 text-white my-4 py-3 md:m-4 md:p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-full md:w-1/4 shadow-custom self-center"
          onClick={() => handleSlider(false, 1, false)}
        >
          <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-2 fa-xl" />
          One time Donation
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center">
        <button
          className="bg-blue-500 text-white my-4 py-3 md:m-4 md:p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-full md:w-1/4 shadow-custom"
          onClick={() => handleSlider(false, 1, "day")}
        >
          <FontAwesomeIcon icon={faCalendarDay} className="mr-2 fa-xl" />
          Daily Subscription
        </button>
        <button
          className="bg-blue-500 text-white my-4 py-3 md:m-4 md:p-3  rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-full md:w-1/4  shadow-custom"
          onClick={() => handleSlider(false, 1, "month")}
        >
          <FontAwesomeIcon icon={faCalendarWeek} className="mr-2 fa-xl" />
          Monthly Subscription
        </button>
        <button
          className="bg-blue-500 text-white my-4 py-3 md:m-4 md:p-3 rounded-xl hover:bg-blue-600 hover:scale-110 ease-in-out duration-300 w-full md:w-1/4  shadow-custom"
          onClick={() => handleSlider(false, 1, "year")}
        >
          <FontAwesomeIcon icon={faCalendar} className="mr-2 fa-xl" />
          Yearly Subscription
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
        className={`question-container max-[768px]:pt-28 flex flex-col justify-center w-3/4 md:w-full lg:w-3/4 ${animateSlide}`}
      >
        {currentQuestion === 1 && (
          <div>
            <h2 className="text-center text-2xl font-bold mb-4">
              What cause do you want to donate?
            </h2>
            {causeChoice}
          </div>
        )}
        {currentQuestion === 2 && (
          <div>
            <h2 className="text-center text-2xl font-bold mb-4">
              What payment method?
            </h2>
            {paymentChoice}
          </div>
        )}
        {currentQuestion === 3 && (
          <div>
            <h2 className="text-center text-2xl font-bold mb-4">
              Please select amount
            </h2>
            {trackerError && (
              <div className="text-red-500 text-center ">
                Custom amount has be a number greater than 0
              </div>
            )}
            {amountChoice}
          </div>
        )}
        {currentQuestion === 4 && (
          <div>
            <h2 className="text-center text-2xl font-bold mb-4">
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
      <div className="flex justify-center mt-4">
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
          className={`absolute left-0 text-gray-300 text-2xl ${
            currentQuestion === 1
              ? "cursor-not-allowed invisible"
              : "hover:text-blue-500"
          }`}
        >
          <FontAwesomeIcon icon={faCircleChevronLeft} size="xl" />
        </button>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="relative w-full min-h-[500px] flex justify-center">
          {renderQuestion()}

          <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
            <div className="flex items-center">{renderNavigationCircles()}</div>
          </div>
          <div className="absolute top-60 left-0 right-0 flex justify-between px-4">
            {renderNavigationArrows()}
          </div>
        </div>
      )}
    </>
  );
};

export default Donate;
