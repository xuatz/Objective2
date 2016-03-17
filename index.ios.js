import React from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux/native';
import App from './app/containers/App';
import todoApp from './app/reducers';

let {
  AppRegistry,
  View
} = React;

let store = createStore(todoApp)
let Objective2 = React.createClass({
  render: function() {
    return(
      <Provider store={store}>
       {() => <App />}
      </Provider>
    );
  }
});

AppRegistry.registerComponent('Objective2', () => Objective2);
