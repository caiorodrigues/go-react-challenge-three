import React, { Fragment } from 'react';
import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import './styles.css';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
