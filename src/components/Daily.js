import React, { useState, useEffect } from "react";
import styles from "./Daily.module.css";
import Sunny from '../assets/Sunny.svg'
import PartlyCloudy from '../assets/PartlyCloudy.svg';
import Storms from '../assets/Storms.svg';
import Rain from '../assets/Rain.svg'



function Daily({ forecast }) {


  function getIcon(weather) {
    switch (weather.toLowerCase()) {
      case "sunny":
        return Sunny;
      case "mostly sunny":
        return Sunny;
      case "chance showers and thunderstorms":
        return Storms;
      case "chance showers and thunderstorms then showers and thunderstorms likely":
          return Storms;
      default:
        console.log(weather.toLowerCase());
        console.log("missing icon")
    }
  }

  return (
      <div className={styles.wrapper}>
      {forecast
        .filter(forecast => forecast.name && !forecast.name.toLowerCase().includes("night"))
        .map(forecast => {
        return (
        <div className={styles.forecastCard}>
          <div className={styles.day}>
            <p>{forecast.name}</p>
          </div>
          <img className={styles.icon} src={`${getIcon(forecast.shortForecast)}`} alt=""/>
          <p className={styles.temp}>{forecast.temperature}</p>
          <p className={styles.shortForecast}>{forecast.shortForecast}</p>
        </div>
        )
      })
      }
    </div>
  )
}


export default Daily;