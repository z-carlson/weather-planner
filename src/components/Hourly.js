import React, { Fragment, useState } from "react";

import Hour from "./Hour";
import Details from "./Details";

import styles from "./Hourly.module.css";

function Hourly({ hourlyForecast, min, max }) {
  // let today = new Date();
  // let now = today.getHours();

  const [currentDetails, setDetails] = useState(null);
  const [isShown, toggleShown] = useState(true);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  function fillBlanks(time) {
    let firstDate = new Date(time.startTime);
    let firstHour = firstDate.getHours();

    let diff = parseInt(firstHour);
    let missingHours = [];

    let i = 0;
    while (i < diff) {
      missingHours.push(i.toString());
      i++;
    }
    return missingHours.map((e, i) => {
      return (
        <div key={i} className={`${styles.hour}, ${styles.past}`}>
          <p>{parseInt(e) > 12 ? e - 12 + " pm" : e + " am"}</p>
        </div>
      );
    });
  }

  function getClassName(forecastData, min, max) {
    if (forecastData.isDaytime === false) {
      if (
        forecastData.temperature >= max ||
        forecastData.temperature <= min ||
        forecastData.shortForecast.toLowerCase().includes("rain") ||
        forecastData.shortForecast.toLowerCase().includes("showers") ||
        forecastData.shortForecast.toLowerCase().includes("storm")
      ) {
        return styles.badNight;
      } else {
        return styles.goodNight;
      }
    } else {
      if (
        forecastData.temperature >= max ||
        forecastData.temperature <= min ||
        forecastData.shortForecast.toLowerCase().includes("rain") ||
        forecastData.shortForecast.toLowerCase().includes("showers") ||
        forecastData.shortForecast.toLowerCase().includes("storm")
      ) {
        return styles.bad;
      } else {
        return styles.good;
      }
    }
  }

  function handleHover(e) {
    // e.target.style.top = `${e.offsetY}px`;
    setTop(e.pageY - 50);
    setLeft(e.pageX + 50);

    let number = e.target.getAttribute("data-num");
    setDetails(number);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.day}>
        {fillBlanks(hourlyForecast[0])}
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            let date = new Date(hour.startTime);
            return date.getDate() === today.getDate();
          })
          .map((hour, i) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <Fragment key={i}>
                <Hour
                  forecastHour={forecastHour}
                  className={getClassName(hour, min, max)}
                  onMouseEnter={handleHover}
                  number={hour.number}
                />
                {isShown && parseInt(currentDetails) === hour.number ? (
                  <Details
                    className={`${getClassName(hour, min, max)}, ${styles.tip}`}
                    data-num={i}
                    forecastHour={forecastHour}
                    style={{ top: `${top}px`, left: `${left}px` }}
                    hour={hour}
                    styles={styles}
                  />
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            today.setDate(today.getDate() + 1);
            let date = new Date(hour.startTime);
            return date.getDate() === today.getDate();
          })
          .map((hour, i) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <Fragment key={i}>
                <Hour
                  forecastHour={forecastHour}
                  className={getClassName(hour, min, max)}
                  onMouseEnter={handleHover}
                  number={hour.number}
                />
                {isShown && parseInt(currentDetails) === hour.number ? (
                  <Details
                    className={`${getClassName(hour, min, max)}, ${styles.tip}`}
                    data-num={i}
                    forecastHour={forecastHour}
                    style={{ top: `${top}px`, left: `${left}px` }}
                    hour={hour}
                    styles={styles}
                  />
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            today.setDate(today.getDate() + 2);
            let date = new Date(hour.startTime);
            return date.getDate() === today.getDate();
          })
          .map((hour, i) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <Fragment key={i}>
                <Hour
                  forecastHour={forecastHour}
                  className={getClassName(hour, min, max)}
                  onMouseEnter={handleHover}
                  number={hour.number}
                />
                {isShown && parseInt(currentDetails) === hour.number ? (
                  <Details
                    className={`${getClassName(hour, min, max)}, ${styles.tip}`}
                    data-num={i}
                    forecastHour={forecastHour}
                    style={{ top: `${top}px`, left: `${left}px` }}
                    hour={hour}
                    styles={styles}
                  />
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            today.setDate(today.getDate() + 3);
            let date = new Date(hour.startTime);
            return date.getDate() === today.getDate();
          })
          .map((hour, i) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <Fragment key={i}>
                <Hour
                  forecastHour={forecastHour}
                  className={getClassName(hour, min, max)}
                  onMouseEnter={handleHover}
                  number={hour.number}
                />
                {isShown && parseInt(currentDetails) === hour.number ? (
                  <Details
                    className={`${getClassName(hour, min, max)}, ${styles.tip}`}
                    data-num={i}
                    forecastHour={forecastHour}
                    style={{ top: `${top}px`, left: `${left}px` }}
                    hour={hour}
                    styles={styles}
                  />
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            today.setDate(today.getDate() + 4);
            let date = new Date(hour.startTime);
            return date.getDate() === today.getDate();
          })
          .map((hour, i) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <Fragment key={i}>
                <Hour
                  forecastHour={forecastHour}
                  className={getClassName(hour, min, max)}
                  onMouseEnter={handleHover}
                  number={hour.number}
                />
                {isShown && parseInt(currentDetails) === hour.number ? (
                  <Details
                    className={`${getClassName(hour, min, max)}, ${styles.tip}`}
                    data-num={i}
                    forecastHour={forecastHour}
                    style={{ top: `${top}px`, left: `${left}px` }}
                    hour={hour}
                    styles={styles}
                  />
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            today.setDate(today.getDate() + 5);
            let date = new Date(hour.startTime);
            return date.getDate() === today.getDate();
          })
          .map((hour, i) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <Fragment key={i}>
                <Hour
                  forecastHour={forecastHour}
                  className={getClassName(hour, min, max)}
                  onMouseEnter={handleHover}
                  number={hour.number}
                />
                {isShown && parseInt(currentDetails) === hour.number ? (
                  <Details
                    className={`${getClassName(hour, min, max)}, ${styles.tip}`}
                    data-num={i}
                    forecastHour={forecastHour}
                    style={{ top: `${top}px`, left: `${left}px` }}
                    hour={hour}
                    styles={styles}
                  />
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            today.setDate(today.getDate() + 6);
            let date = new Date(hour.startTime);
            return date.getDate() === today.getDate();
          })
          .map((hour, i) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <Fragment key={i}>
                <Hour
                  forecastHour={forecastHour}
                  className={getClassName(hour, min, max)}
                  onMouseEnter={handleHover}
                  number={hour.number}
                />
                {isShown && parseInt(currentDetails) === hour.number ? (
                  <Details
                    className={`${getClassName(hour, min, max)}, ${styles.tip}`}
                    data-num={i}
                    forecastHour={forecastHour}
                    style={{ top: `${top}px`, left: `${left}px` }}
                    hour={hour}
                    styles={styles}
                  />
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default Hourly;
