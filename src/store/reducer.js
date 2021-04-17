import {
  ADD_WEATHER,
  DELETE_WEATHER,
  CHANGE_VALUE,
  ADD_WEEK_WEATHER,
  REMOVE_WEEK_WEATHER,
  ADD_ERROR,
  REMOVE_ERROR,
} from './actions';

const defaultState = {
  weather: [],
  weekWeather: [],
  input: '',
  error: false,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_WEATHER:
      return {
        ...state,
        weather: [...state.weather, action.payload],
        error: false,
      };
    case DELETE_WEATHER:
      return {
        ...state,
        weather: state.weather.filter(
          (weather) => weather.name !== action.payload
        ),
        error: false,
      };
    case CHANGE_VALUE:
      return { ...state, input: action.payload, error: false };
    case ADD_WEEK_WEATHER:
      return {
        ...state,
        weekWeather: [...state.weekWeather, action.payload],
        error: false,
      };
    case REMOVE_WEEK_WEATHER:
      return {
        ...state,
        weekWeather: state.weekWeather.filter(
          (weekWeather) => weekWeather.city.name !== action.payload
        ),
        error: false,
      };
    case ADD_ERROR:
      return { ...state, error: true };
    case REMOVE_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export const addWeather = (payload) => ({ type: ADD_WEATHER, payload });
export const addWeekWeather = (payload) => ({
  type: ADD_WEEK_WEATHER,
  payload,
});
export const changeValue = (payload) => ({ type: CHANGE_VALUE, payload });
export const deleteWeather = (payload) => ({ type: DELETE_WEATHER, payload });
export const deleteWeekWeather = (payload) => ({
  type: REMOVE_WEEK_WEATHER,
  payload,
});

export const setError = () => ({ type: ADD_ERROR });
export const removeError = () => ({ type: REMOVE_ERROR });
