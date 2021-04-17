import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const WeekWeather = ({ nameCity }) => {
  const weekWeather = useSelector((state) => state.reducer.weekWeather);
  const currentWeather = weekWeather.filter(
    (item) => item.city.name === nameCity
  );
  const { list } = currentWeather[0];

  return (
    <>
      {list.map((item) => {
        const year = item.dt_txt.slice(0, 4);
        const month = item.dt_txt.slice(5, 7);
        const day = item.dt_txt.slice(8, 10);
        const hours = item.dt_txt.slice(11, 13) * 1;
        return (
          <div className="card" key={uuidv4()}>
            <h3>{`${hours}:00 - ${day}/${month}/${year}`}</h3>
            <p>{Math.floor(item.main.temp * 1) / 1}&deg;C</p>
            <div className="flex">
              <p>min: {Math.floor(item.main.temp_min)}&deg;C</p>
              <p>max: {Math.floor(item.main.temp_max)}&deg;C</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WeekWeather;
