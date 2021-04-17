import { addWeather, addWeekWeather, setError } from '../store/reducer';
import axios from 'axios';

export const fetchWeather = (inputValue) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&lang=ru&appid=82e17534f531bddc0561bcda2bdc6dec`
      );
      if (response.status === 200) {
        dispatch(addWeather(response.data));
      } else {
        dispatch(setError());
      }
    } catch (error) {
      dispatch(setError());
    }
  };
};

export const fetchWeekWeather = (city) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=82e17534f531bddc0561bcda2bdc6dec`
      );
      if (response.status === 200) {
        dispatch(addWeekWeather(response.data));
      } else {
        dispatch(setError());
      }
    } catch (error) {
      console.log(error);
    }
  };
};
