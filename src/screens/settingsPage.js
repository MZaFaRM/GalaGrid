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
          <TouchableOpacity
            onPress={() => navigation.push(pages.productForm)}
            style={styles.settingsItem}>
            <Text style={styles.settingsText}>Submit a Product</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  settingsItem: {
    marginVertical: 10,
    paddingVertical: 20,

    borderBottomWidth: 1,
    borderColor: 'white',
    margin: 20
  },
  settingsText: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10,
    fontFamily: fonts.tertiary,
  },
});

export default SettingsPage;
