import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../assets/icons';
import {RecommendedStuffBoxCard} from './homeComponents';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';

export const Banner = ({image, text}) => (
  <ImageBackground source={image} resizeMode="stretch">
    <View style={styles.banner}>
      <Text style={styles.bannerText}>{text}</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  bannerBox: {
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  banner: {
    height: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  bannerText: {
    fontSize: 30,
    fontFamily: fonts.quaternary,
    color: 'grey',
    margin: 20,
  },
});
