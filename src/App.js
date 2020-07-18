import React, { Fragment, useState } from 'react';
import './App.module.css'
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import Forecast from './components/Forecast';




function App() {
  
  const [location, setLocation] = useState([]);
  const [forecast, setForecast] = useState([{}]);
  const [hourlyForecast, setHourlyForecast] = useState([{}]);

  function getForecast() {
    console.log("getting forecast!")

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://api.weather.gov/points/${location[0]},${location[1]}/forecast`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result);
        setForecast(data.properties.periods);

      })
      .catch(error => console.log('error', error));

      fetch(`https://api.weather.gov/points/${location[0]},${location[1]}/forecast/hourly`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result);
        setHourlyForecast(data.properties.periods)
      })
      .catch(error => console.log('error', error));

  }
  
  function getLocation(e) {
    e.preventDefault();
    
    
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      let crd = pos.coords;
      setLocation([crd.latitude, crd.longitude])
      console.log(crd.latitude, crd.longitude);
    }
  
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  
  
  
  return (
    <Fragment>
    <Header />
    <main>
      <WeatherForm getLocation={getLocation} getForecast={getForecast} location={location}/>
      <Forecast forecast={forecast} hourlyForecast={hourlyForecast}/>

    </main>
    <footer />
    </Fragment>
  )
}

export default App;
