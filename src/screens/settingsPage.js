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
import {RecommendedStuffBoxCard} from '../components/homeComponents';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';
import {EventCard} from '../components/eventComponents';
import {Banner} from '../components/component';

const SettingsPage = ({navigation}) => {
  return (
    <Layout
      navigation={navigation}
      title={'Settings Page'}
      footer={true}
      header={false}
      currentPage={pages.settingsPage}>
      <ScrollView style={styles.container}>
        <Banner
          image={require('../assets/images/bannerBGSettings.jpg')}
          text={'Settings'}
        />
        <View style={{marginBottom: 150}}>
          <View style={styles.settingBox}>
            <Icon
              type="AntDesign"
              name="rightcircle"
              size={48}
              color={'white'}
            />
            <Text style={styles.settingText}>About us</Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  settingBox: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    borderRadius: 10,

    flexDirection: 'row',
  },
  settingText: {
    fontSize: 28,
    fontFamily: 'Urbanist-Italic',
    marginLeft: 10
  },
});

export default SettingsPage;
