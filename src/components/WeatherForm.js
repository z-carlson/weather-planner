import React, { Fragment } from 'react';
import './WeatherForm.css'

function WeatherForm() {
  return (
    <Fragment>
      <form>
        <div>
        <label htmlFor="location">Location</label>
        <input type="text" placeholder="Enter zipcode" id="location" name="location"></input>
        </div>
        <div>
          <label htmlFor="desired">Desired Weather</label>
          <select name="desired" id="desired">
            <option value="Sunny">Sunny</option>
            <option value="Rainy">Rainy</option>
          </select>
        </div>
        <div>
          <fieldset>
            <legend>Temperature Range</legend>
            <label htmlFor="min">minimum</label>
            <input id="min" name="min" placeholder="60"></input>

            <label htmlFor="max">maximum</label>
            <input id="max" name="max" placeholder="80"></input>
          </fieldset>
        </div>
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
          <input id="submit-button" type="submit" value="Schedule"/>
        </div>
     </form>
    </Fragment>
  )
}

export default WeatherForm;