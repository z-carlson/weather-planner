import React, { useState, useEffect } from "react";
import styles from "./Daily.module.css";
import Sunny from '../assets/Sunny.svg'
import PartlyCloudy from '../assets/PartlyCloudy.svg';
import Storms from '../assets/Storms.svg';
import Rain from '../assets/Rain.svg'


const forecasts = [{
    icon: Sunny,  
    weather: "sunny", 
    temp: "78"
  },
  {
    icon: PartlyCloudy,
    weather: "cloudy", 
    temp: "78"
  },
  {
    icon: PartlyCloudy,
    weather: "partly cloudy", 
    temp: "78"
  },
  {
    icon: Storms,
    weather: "chance of storms", 
    temp: "78"
  },
  {
    icon: Sunny,  
    weather: "sunny", 
    temp: "78"
  },
  {
    icon: Sunny,  
    weather: "sunny", 
    temp: "78"
  },
  {
    icon: Sunny,  
    weather: "sunny", 
    temp: "78"
  }, ]


function Daily() {

  return (
    <div className={styles.wrapper}>
      {forecasts.map(forecast => {
        return (
        <div className={styles.forecastCard}>
          <img className={styles.icon} src={`${forecast.icon}`} alt=""/>
          <p className={styles.temp}>{forecast.temp}</p>
          <p className={styles.weather}>{forecast.weather}</p>
        </div>
        )
      })}
    </div>
  )
}


export default Daily;