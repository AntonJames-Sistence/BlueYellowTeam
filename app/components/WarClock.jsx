import React, { useEffect, useState } from "react";

const WarClock = () => {
  function calculateTimeDifference(targetTime) {
    const currentTime = new Date();
    return currentTime - targetTime;
  }

  const [targetTime] = useState(new Date("2022-02-24T05:00:00Z"));
  const [elapsedTime, setElapsedTime] = useState(
    calculateTimeDifference(targetTime)
  );

  useEffect(() => {
    function updateTime() {
      setElapsedTime(calculateTimeDifference(targetTime));
    }

    const intervalId = setInterval(updateTime, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatElapsedTime(elapsedTime) {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return (
      <div className="flex flex-col h-full w-full max-w-[175px] sm:max-w-none">
        <div className="w-full flex flex-row justify-between items-center font-bold lg:text-lg">
          <div className="mr-2">
            {days}
            <span className="text-sm lg:text-lg">d</span>
          </div>
          <div className="w-[1px] bg-black h-[20px]"></div>
          <div className="mr-2">
            {hours}
            <span className="text-sm lg:text-lg">h</span>
          </div>
          <div className="w-[1px] bg-black h-[20px]"></div>
          <div>
            {minutes}
            <span className="text-sm lg:text-lg">m</span>
          </div>
        </div>
        <div className="w-full font-bold text-xs lg:text-xs">
          SINCE RUSSIAN INVASION OF UKRAINE
        </div>
      </div>
    );
  }

  return <div id="time">{formatElapsedTime(elapsedTime)}</div>;
};

export default WarClock;
