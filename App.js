/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';

import {pages} from './src/constants/constants';
import IntroPage from './src/screens/IntroPage';
import FilterPage from './src/screens/filterPage';
import HomePage from './src/screens/homePage';
import StuffDetailsPage from './src/screens/stuffDetailsPage';
import EventPage from './src/screens/eventPage';
import SettingsPage from './src/screens/settingsPage';
import EventDetailsPage from './src/screens/eventDetailsPage';
import ProductForm from './src/screens/productForm';
import SignUpPage from './src/screens/signUpPage';
import ErrorBoundary from 'react-native-error-boundary';
import MessageModal from './src/components/errorModal';
import LoginPage from './src/screens/loginPage';
import EditProfile from './src/screens/editProfilePage.js';
import BlankPage from './src/screens/blankPage.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ErrorBoundary>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={pages.blankPage}
              component={BlankPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={pages.introPage}
              component={IntroPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={pages.loginPage}
              component={LoginPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={pages.homePage}
              component={HomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={pages.signUpPage}
              component={SignUpPage}
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
              name={pages.eventPage}
              component={EventPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={pages.eventDetails}
              component={EventDetailsPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={pages.settingsPage}
              component={SettingsPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={pages.productForm}
              component={ProductForm}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={pages.editProfile}
              component={EditProfile}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ErrorBoundary>
  );
};

export default App;
