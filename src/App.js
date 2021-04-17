import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Input />
      <WeatherCard />
    </div>
  );
};

export default App;
