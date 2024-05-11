import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import {createProduct} from '../api/products';
import Icon from '../assets/icons';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';
import {handleAuthError} from '../api/auth';
import {editUser, fetchUser} from '../api/user';
import MessageModal from '../components/errorModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAuthToken} from '../api/src';

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
