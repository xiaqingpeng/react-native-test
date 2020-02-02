import React, {Component} from 'react';
import AppContainer from './MainView';
import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';

import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import {applyMiddleware, createStore} from 'redux';
import reducers from './redux/reducers/index.js';

const middleware = createReactNavigationReduxMiddleware(state => state.nav);
const AppReduxContainer = createReduxContainer(AppContainer);
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(AppReduxContainer);
const store = createStore(reducers, applyMiddleware(thunk,middleware));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState></AppWithNavigationState>
      </Provider>
    );
  }
}
