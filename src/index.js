import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsWeatherPage from './components/DetailsWeatherPage';

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route
            path="/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <DetailsWeatherPage nameCity={id} />;
            }}
          />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
