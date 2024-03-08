/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView} from 'react-native';

import IntroPage from './src/screens/IntroPage';

function App() {
  return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <IntroPage />
      </ScrollView>
  );
}

export default App;
