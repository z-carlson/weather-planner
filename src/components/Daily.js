import React, { useState, useEffect } from "react";
import styles from "./Daily.module.css";
import Sunny from '../assets/Sunny.svg'
import PartlyCloudy from '../assets/PartlyCloudy.svg';
import Storms from '../assets/Storms.svg';
import Rain from '../assets/Rain.svg'



function Daily({ forecast }) {


  function getIcon(weather) {
    switch (weather) {
      case "Mostly Sunny":
        return Sunny;
      case "Chance Showers And Thunderstorms then Mostly Sunny":
        return Storms;
      case "Chance Showers And Thunderstorms":
        return Rain;
      default:
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