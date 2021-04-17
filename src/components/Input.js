import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, fetchWeekWeather } from '../asyncActions/WeatherActions';
import { changeValue } from '../store/reducer';

const Input = () => {
  const inputValue = useSelector((state) => state.reducer.input);
  const error = useSelector((state) => state.reducer.error);
  const weather = useSelector((state) => state.reducer.weather);
  const weekWeather = useSelector((state) => state.reducer.weekWeather);
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      if (
        weather.every(
          (el) => el.name.toLowerCase() !== inputValue.toLowerCase()
        ) &&
        weekWeather.filter(
          (el) => el.city.name.toLowerCase() !== inputValue.toLowerCase()
        )
      ) {
        dispatch(fetchWeather(inputValue));
        dispatch(fetchWeekWeather(inputValue));
        dispatch(changeValue(''));
      }
    }
  };
  return (
    <form onSubmit={(e) => handleSubmitForm(e)}>
      {error ? <p>incorrect value</p> : null}
      <input
        value={inputValue}
        style={!error ? { border: 'none' } : { border: '2px solid red' }}
        onChange={(e) => dispatch(changeValue(e.target.value))}
        placeholder="enter the country"
      />
      <button type="submit">search</button>
    </form>
  );
};

export default Input;
