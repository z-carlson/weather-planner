import React from "react";
import styles from './Forecast.module.css';

import Daily from './Daily';
import Hourly from './Hourly';

function Forecast({ forecast, hourlyForecast }) {
  return (
    <div className={styles.wrapper}>
      <Daily forecast={forecast}/>
      <Hourly hourlyForecast={hourlyForecast} />
      
    </div>
  )
}

export default Forecast;