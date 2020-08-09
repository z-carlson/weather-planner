import React from "react";

function Details(props) {
  return (
    <div
      className={props.className}
      data-num={props.i}
      style={props.style}
      hour={props.hour}
      styles={props.styles}
    >
      <h5>
        {props.forecastHour > 12
          ? props.forecastHour - 12 + " pm"
          : props.forecastHour + " am"}
      </h5>
      <p>{props.hour.temperature} &#730;F</p>
      <p>{props.hour.shortForecast}</p>
    </div>
  );
}

export default Details;
