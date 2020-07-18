import React, { Fragment } from 'react';
import './App.module.css'
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import Forecast from './components/Forecast';


function App() {
  return (
    <Fragment>
    <Header />
    <main>
      <WeatherForm />
      <Forecast />

    </main>
    </Fragment>
  )
}

export default App;
