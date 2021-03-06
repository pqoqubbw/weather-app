import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  deleteWeather,
  deleteWeekWeather,
  removeError,
} from '../store/reducer';
import { v4 as uuidv4 } from 'uuid';

const WeatherCardItem = () => {
  const weather = useSelector((state) => state.reducer.weather);
  const error = useSelector((state) => state.reducer.error);
  const dispatch = useDispatch();


  const checkError = () => {
    if(error) dispatch(removeError());
  }

  return (
    <div className="grid">
      {weather.map((el) => (
        <div className="card" key={uuidv4()}>
          <h3>{el.name}</h3>
          <img
            src={`https://openweathermap.org/img/w/${el.weather[0].icon}.png`}
            alt={el.name}
          />
          <p>today: {Math.floor(el.main.temp * 1) / 1}&deg;C</p>
          <div className="btn-cover">
            <button
              className="delete"
              onClick={() => {
                dispatch(deleteWeather(el.name));
                dispatch(deleteWeekWeather(el.name));
                checkError();
              }}
            >
              delete
            </button>
            <Link to={`/${el.name}`}>
              <button onClick={() => checkError()}>
                learn more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherCardItem;
