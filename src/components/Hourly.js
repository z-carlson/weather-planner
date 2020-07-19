import React, { useState, useEffect, Fragment } from "react";
import styles from './Hourly.module.css';






function Hourly({ hourlyForecast }) {

  let today = new Date();
  let now = today.getHours();

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
    console.log(missingHours);

    return missingHours.map((e, i) => {
      return (
        <div className={`${styles.hour}, ${styles.past}`}><p>{parseInt(e) > 12 ? (e - 12) + ' pm' : e + ' am' }
          </p></div>
      )
    })  
  }


  function getClassName(forecastData) {

    if (forecastData.isDaytime === false) {
      return styles.night;
    } else if (forecastData.temperature >= 80 || forecastData.temperature <=60) {
      return styles.bad;
    } else {
      return styles.good;
    }
  }
  



  return (
    <div className={styles.wrapper}>
      <div className={styles.day}>
        {fillBlanks(hourlyForecast[0])}
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            let date = new Date(hour.startTime);
            let dateNum = parseInt(date.getDate());
            return dateNum === parseInt(today.getDate());
          })
          .map((hour, i) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <Fragment>
              <div key={i} className={getClassName(hour)}>
                 <p>{forecastHour > 12 ? (forecastHour  - 12) + " pm" : forecastHour + " am"}</p>
                 <div className={styles.hidden}>
                <h5>{hour.temperature}</h5>
                <p>{hour.shortForecast}</p>
              </div>
              </div>
   
              </Fragment>
            )
          })
        }
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            let date = new Date(hour.startTime);
            let dateNum = parseInt(date.getDate());
            return dateNum === parseInt(today.getDate()) + 1;
          })
          .map((hour) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <div className={getClassName(hour)}>
                 <p>{forecastHour > 12 ? (forecastHour  - 12) + " pm" : forecastHour + " am"}</p>
              </div>
            )
          })
        }
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            let date = new Date(hour.startTime);
            let dateNum = parseInt(date.getDate());
            return dateNum === parseInt(today.getDate()) + 2;
          })
          .map((hour) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <div className={getClassName(hour)}>
                 <p>{forecastHour > 12 ? (forecastHour  - 12) + " pm" : forecastHour + " am"}</p>
              </div>
            )
          })
        }
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            let date = new Date(hour.startTime);
            let dateNum = parseInt(date.getDate());
            return dateNum === parseInt(today.getDate()) + 3;
          })
          .map((hour) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <div className={getClassName(hour)}>
                 <p>{forecastHour > 12 ? (forecastHour  - 12) + " pm" : forecastHour + " am"}</p>
              </div>
            )
          })
        }
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            let date = new Date(hour.startTime);
            let dateNum = parseInt(date.getDate());
            return dateNum === parseInt(today.getDate()) +4;
          })
          .map((hour) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <div className={getClassName(hour)}>
                 <p>{forecastHour > 12 ? (forecastHour  - 12) + " pm" : forecastHour + " am"}</p>
              </div>
            )
          })
        }
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            let date = new Date(hour.startTime);
            let dateNum = parseInt(date.getDate());
            return dateNum === parseInt(today.getDate()) +5;
          })
          .map((hour) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <div className={getClassName(hour)}>
                 <p>{forecastHour > 12 ? (forecastHour  - 12) + " pm" : forecastHour + " am"}</p>
              </div>
            )
          })
        }
      </div>
      <div className={styles.day}>
        {hourlyForecast
          .filter((hour) => {
            let today = new Date();
            let date = new Date(hour.startTime);
            let dateNum = parseInt(date.getDate());
            return dateNum === parseInt(today.getDate()) +6;
          })
          .map((hour) => {
            let time = new Date(hour.startTime);
            let forecastHour = time.getHours();
            return (
              <div className={getClassName(hour)}>
                 <p>{forecastHour > 12 ? (forecastHour  - 12) + " pm" : forecastHour + " am"}</p>
              </div>
            )
          })
        }
      </div>
    </div>
        )
       }


export default Hourly;



// {days.map((day) => {
//   hourlyForecast.map((hour) => {
//     let today = new Date();
//     let date = new Date(hour.startTime);
//     let dateNum = date.getDate();
//     console.log(parseInt(dateNum) - parseInt(today.getDate()));

//   })

//   // switch (today.getDate() - date) {
//   //   case 0:
//   //     return <div className={styles.day}>
//   //       <p>might work</p>
//   //     </div>
//   //   default:
//   //     return <div className={styles.day}>idk</div>
//   // }
// })}

// <div className={styles.wrapper}>
// {days.map((day, i) => {
  
//   return (
//   <div className={styles.day}>        
//     {hourlyForecast.map((hour, i) => {
//       let startTime = new Date(hour.startTime);
//       console.log(startTime.getDate());

//       return (
//         <div className={`${styles.hour}`}>
//           <p>{startTime.getHours()}</p>
//         </div>
//       )
//     })}

//   </div>
//   )})}
// </div>