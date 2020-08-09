import React from "react";
import styles from "./Daily.module.css";
import { ReactComponent as Sunny } from "../assets/Sunny.svg";
import { ReactComponent as PartlyCloudy } from "../assets/PartlyCloudy.svg";
import { ReactComponent as Storms } from "../assets/Storms.svg";
import { ReactComponent as Rain } from "../assets/Rain.svg";

function Daily({ forecast }) {
  function getIcon(weather) {
    if (weather.toLowerCase().includes("sun")) {
      return <Sunny />;
    } else if (weather.toLowerCase().includes("cloud")) {
      return <PartlyCloudy />;
    } else if (weather.toLowerCase().includes("storm")) {
      return <Storms />;
    } else if (weather.toLowerCase().includes("rain")) {
      return <Rain />;
    } else {
      console.log("missing icon for: ", weather);
      return <Sunny />;
    }
  }

  return (
    <div className={styles.wrapper}>
      {forecast
        .filter(
          (forecast) =>
            forecast.name && !forecast.name.toLowerCase().includes("night")
        )
        .map((forecast, i) => {
          return (
            <div className={styles.forecastCard} key={i}>
              <div className={styles.day}>
                <p>{forecast.name}</p>
              </div>
              {getIcon(forecast.shortForecast)}
              <p className={styles.temp}>{forecast.temperature}</p>
              <p className={styles.shortForecast}>{forecast.shortForecast}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Daily;
