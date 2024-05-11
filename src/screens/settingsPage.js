import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {removeAuthToken} from '../api/src';
import {Banner} from '../components/component';
import Layout from '../components/layout';
import {fonts, pages} from '../constants/constants';

const SettingsPage = ({navigation}) => {
  const logout = () => {
    removeAuthToken();
    navigation.replace(pages.loginPage);
  };
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
          <TouchableOpacity onPress={logout} style={styles.settingsItem}>
            <Text style={styles.settingsText}>Log out</Text>
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
    marginVertical: 0,
    paddingVertical: 20,

    borderBottomWidth: 1,
    borderColor: 'white',
    margin: 20,
  },
  settingsText: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: fonts.tertiary,
  },
});

export default SettingsPage;
