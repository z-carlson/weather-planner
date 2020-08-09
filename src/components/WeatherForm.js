import React, { Fragment } from "react";
import styles from "./WeatherForm.module.css";

function WeatherForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.getForecast();
  }

  return (
    <Fragment>
      <form className={styles.weatherForm} onSubmit={handleSubmit}>
        <div>
          <button
            type="button"
            className={styles.locationButton}
            onClick={props.getLocation}
          >
            Get My Location
          </button>
          {props.location.length > 0 ? (
            <Fragment>
              <h5>Current Location: </h5>
              <p>{`Latitude: ${props.location[0]}`}</p>
              <p>{`Longitude: ${props.location[1]}`}</p>
            </Fragment>
          ) : (
            ""
          )}
        </div>
        <div>
          <fieldset>
            <legend>Temperature Range</legend>
            <label htmlFor="min">minimum</label>
            <input
              id="min"
              name="min"
              placeholder="60"
              value={props.min}
              onChange={(e) => {
                props.setMin(e.target.value);
              }}
            ></input>

            <label htmlFor="max">maximum</label>
            <input
              id="max"
              name="max"
              placeholder="80"
              value={props.max}
              onChange={(e) => {
                props.setMax(e.target.value);
              }}
            ></input>
          </fieldset>
        </div>
        <div>
          {props.location.length > 1 && (
            <button className={styles.submitButton} type="submit">
              Schedule
            </button>
          )}
        </div>
      </form>
    </Fragment>
  );
}

export default WeatherForm;
