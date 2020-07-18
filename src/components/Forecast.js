import React from "react";
import styles from './Forecast.module.css';

import Daily from './Daily';

function Forecast() {
  return (
    <div className={styles.wrapper}>
      <Daily />
      
    </div>
  )
}

export default Forecast;