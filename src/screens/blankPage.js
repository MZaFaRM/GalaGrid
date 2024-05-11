import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { getAuthToken } from '../api/src';
import { pages } from '../constants/constants';

const BlankPage = ({navigation}) => {
  const checkAuth = async () => {
    const first_launch = await AsyncStorage.getItem('FIRST_LAUNCH');
    if (!first_launch) {
      await AsyncStorage.setItem('FIRST_LAUNCH', 'Done');
      navigation.navigate(pages.introPage);
    } else if (!(await getAuthToken())) {
      navigation.navigate(pages.loginPage);
    } else {
      navigation.navigate(pages.homePage);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <View
      style={{backgroundColor: 'black', height: '100%', width: '100%'}}></View>
  );
};

export default BlankPage;
