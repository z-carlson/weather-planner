import React, { useState, useEffect } from "react";
import styles from './Hourly.module.css';






function Hourly({ hourlyForecast }) {

  const [currentTime, setCurrentTime] = useState('');
  
  const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  const days = [0,1,2,3,4,5,6];

  useEffect(() => {
    let timeNow = new Date();
    setCurrentTime(timeNow);
    console.log(timeNow)
    console.log(hourlyForecast[0].startTime)
  }, []);



  return (
    <div className={styles.wrapper}>
      {days.map((day, i) => {
        return (
        <div className={styles.day}>        
          {hours.map((hour, i) => {
            return (
              <div className={`${styles.hour}`}>
                <p>{hour <= 12 ? hour + " am" : (hour - 12) + " pm"}</p>
              </div>
            )
          })}

        </div>
        )})}
      </div>
        )
       }


export default Hourly;