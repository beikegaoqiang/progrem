import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import AppStore  from '../src/store/index'
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(
  <Provider store={AppStore}>
      <App />
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
