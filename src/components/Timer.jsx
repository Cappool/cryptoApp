import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";

const calculateTimeRemaining = (targetTimestamp) => {
  const now = Math.floor(Date.now() / 1000);
  const timeDifference = targetTimestamp - now;

  if (timeDifference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(timeDifference / (60 * 60 * 24));
  const hours = Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeDifference % (60 * 60)) / 60);
  const seconds = timeDifference % 60;

  return { days, hours, minutes, seconds };
};
export default function Timer({ targetTimestamp }) {
  const [{ days, hours, minutes, seconds }, setTimeRemaining] = useState(
    calculateTimeRemaining(targetTimestamp)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetTimestamp));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetTimestamp]);

  return (
    <div className="time-left-container">
      <Countdown timeUnit="Days" timeNumber={days} />
      <Countdown timeUnit="Hours" timeNumber={hours} />
      <Countdown timeUnit="Minutes" timeNumber={minutes} />
      <Countdown timeUnit="Seconds" timeNumber={seconds} />
    </div>
  );
}
