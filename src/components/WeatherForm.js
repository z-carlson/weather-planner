import React, { Fragment, useState } from 'react';
import styles from './WeatherForm.module.css'

function WeatherForm(props) {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    
    props.getForecast();

  }

  return (
    <Fragment>
      <form className={styles.weatherForm} onSubmit={handleSubmit}>
        <div>
          <div>
          <label htmlFor="duration">Duration</label>
          <select name="duration" id="duration"> 
            <option value="0.5">30 Mins</option>
            <option value="1">1 Hour</option>
            <option value="2">2 Hours</option>
            <option value="3">3 Hours</option>
            <option value="4">4 Hours</option>
          </select>
          </div>
          <div>
         <label htmlFor="desired">Desired Weather</label>
          <select name="desired" id="desired">
            <option value="Sunny">Sunny</option>
            <option value="Rainy">Rainy</option>
          </select> 
          </div>

        </div>
        <div>
          <fieldset>
            <legend>Temperature Range</legend>
            <label htmlFor="min">minimum</label>
            <input id="min" name="min" placeholder="60" value={min} onChange={(e) => {
              setMin(e.target.value)
            }}></input>

            <label htmlFor="max">maximum</label>
            <input id="max" name="max" placeholder="80" value={max} onChange={(e) => {
              setMax(e.target.value)
            }}></input>
          </fieldset>
        </div>
        <div>
          <div>
            <button type="button" className={styles.locationButton} onClick={props.getLocation}>Get My Location</button>
        {/* <label htmlFor="location">Location</label>
        <input type="text" placeholder="Enter zipcode" id="location" name="location"></input> */}
          </div>
          {(props.location.length > 1) &&
            <button className={styles.submitButton} type="submit">Schedule</button>
          }
          
        </div>
     </form>
    </Fragment>
  )
}

export default WeatherForm;