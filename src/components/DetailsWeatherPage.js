import React from 'react';
import { Link } from 'react-router-dom';
import WeekWeather from './WeekWeather';
import Header from './Header';
import { useSelector } from 'react-redux';

const DetailsWeatherPage = ({ nameCity }) => {
  const weather = useSelector((state) => state.reducer.weather);
  const currentWeather = weather.filter((item) => item.name === nameCity);
  const { main } = currentWeather[0];
  return (
    <div className="container">
      <Header />
      <Link to="/">
        <button className="home">Go home</button>
      </Link>
      <div className="main-content">
        <h2>{currentWeather[0].name}</h2>
        <div className="flex card-info">
          <div className="card-info">
            <h4>{currentWeather[0].weather[0].main}</h4>
            <img
              src={`https://openweathermap.org/img/w/${currentWeather[0].weather[0].icon}.png`}
              alt={currentWeather[0].name}
            />
            <p>{currentWeather[0].weather[0].description}</p>
          </div>
          <div>
            <h4>temp: {Math.floor(main.temp)}&deg;C</h4>
            <p>feels like: {Math.floor(main.feels_like)}</p>
            <p>temp max: {Math.floor(main.temp_max)}&deg;C</p>
            <p>temp min: {Math.floor(main.temp_min)}&deg;C</p>
          </div>
          <div>
            <p>humidity: {main.humidity}</p>
            <p>pressure: {main.pressure}</p>
          </div>

          <div>
            <h4>wind:</h4>
            <p>deg: {currentWeather[0].wind.deg}</p>
            <p>speed: {currentWeather[0].wind.speed}</p>
          </div>
        </div>
        <h5 className="weather-title">weather for the near future</h5>
        <div className="grid">
          <WeekWeather nameCity={nameCity} />
        </div>
      </div>
    </div>
  );
};

export default DetailsWeatherPage;
