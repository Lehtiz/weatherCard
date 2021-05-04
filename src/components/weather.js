/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';
import { format, fromUnixTime } from 'date-fns';
import moment from 'moment';

const CardExampleCard = ({ weatherData }) => (
  <div className="main">
    <div className="top">
      <div className="header">City Name: {weatherData.name}</div>
    </div>
    <div className="flex">
      <p className="date">Day: {moment().format('dddd')}</p>
      <p className="date">Date: {moment().format('LL')}</p>
      <p className="description">Description: {weatherData.weather[0].description}</p>
    </div>
    <div className="flex">
      <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
    </div>
    <div className="flex sunrise-sunset">
      <p>Sunrise: {format(fromUnixTime(weatherData.sys.sunrise), 'HH:mm:ss')}</p>
      <p>Sunset: {format(fromUnixTime(weatherData.sys.sunset), 'HH:mm:ss')}</p>
    </div>
  </div>
);

export default CardExampleCard;
