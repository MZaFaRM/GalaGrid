/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';

import { pages } from './src/constants/constants';
import IntroPage from './src/screens/IntroPage';
import FilterPage from './src/screens/filterPage';
import HomePage from './src/screens/homePage';
import StuffDetailsPage from './src/screens/stuffDetailsPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={pages.introPage}
            component={IntroPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={pages.homePage}
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={pages.filterPage}
            component={FilterPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={pages.stuffDetailsPage}
            component={StuffDetailsPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={pages.stuffUploadPage}
            component={FilterPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={pages.userProfilePage}
            component={FilterPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
