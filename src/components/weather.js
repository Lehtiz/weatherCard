/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';
import { format, fromUnixTime } from 'date-fns';
import moment from 'moment';

const Weather = ({ weatherData }) => (
  <div className="main">
    <div className="top">
      <div className="header">City Name: {weatherData.name} </div>
      <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
    </div>
    <div className="dateContainer">
      <div>
        <p className="dateHeading">Day:</p>
        <p className="dateItem">{moment().format('dddd')}</p>
      </div>
      <div>
        <p className="dateHeading">Date:</p>
        <p className="dateItem">{moment().format('LL')}</p>
      </div>
      <div>
        <p className="dateHeading">Description:</p>
        <p className="dateItem">{weatherData.weather[0].description}</p>
      </div>
    </div>
    <div className="sunrise-sunset">
      <p>Sunrise: {format(fromUnixTime(weatherData.sys.sunrise), 'HH:mm:ss')}</p>
      <p>Sunset: {format(fromUnixTime(weatherData.sys.sunset), 'HH:mm:ss')}</p>
    </div>
  </div>
);

export default Weather;
