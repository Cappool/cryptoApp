import React from "react";

export default function Countdown({ timeUnit, timeNumber }) {
  return (
    <div className="counter">
      <div className="time-unit">
        <div className="time-unit-value">{timeUnit}</div>
      </div>
      <div className="time-number">
        <div className="time-number-value">
          {Number.isNaN(timeNumber) ? "--" : timeNumber}
        </div>
      </div>
    </div>
  );
}
