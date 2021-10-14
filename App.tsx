import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { Provider } from 'react-redux'
import Home from './src/screens/Home';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

