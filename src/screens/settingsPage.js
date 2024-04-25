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
import {RecommendedStuffBoxCard} from '../components/homePageComponents';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';
import {EventCard} from '../components/eventPageComponents';

const SettingsPage = ({navigation}) => {
  return (
    <Layout
      navigation={navigation}
      title={'Settings Page'}
      footer={true}
      header={false}
      currentPage={pages.settingsPage}>
      <ScrollView style={styles.container}>
        <View style={styles.bannerBox}>
          <ImageBackground
            source={require('../assets/images/bannerBGSettings.jpg')}
            resizeMode="stretch">
            <View style={styles.banner}>
              <Text style={styles.bannerText}>Settings</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{marginBottom: 150}}></View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  bannerBox: {
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'red',
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

export default SettingsPage;
