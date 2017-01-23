import React from 'react';
import ReactDOM from 'react-dom';

import store from './configureStore';
import {Provider} from 'react-redux';

import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Pets from './containers/PetsPage';
import PetsShow from './containers/PetsShow';
import PetsNew from './containers/PetsNew';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="/pets" component={Pets}>
          <Route path="/pets/new" component={PetsNew} />
          <Route path="/pets/:id" component={PetsShow} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container'))
