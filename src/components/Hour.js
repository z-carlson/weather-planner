import React from "react";

function Hour(props) {
  return (
    <div
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      data-num={props.number}
    >
      <p>
        {props.forecastHour > 12
          ? props.forecastHour - 12 + " pm"
          : props.forecastHour + " am"}
      </p>
    </div>
  );
}

export default Hour;
