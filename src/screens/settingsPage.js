import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {removeAuthToken, removeUserData} from '../api/src';
import {Banner} from '../components/component';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';
import Icon from '../assets/icons';

const SettingsPage = ({navigation}) => {
  const logout = async () => {
    await removeAuthToken();
    await removeUserData();
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
            onPress={() => navigation.push(pages.editProfile)}
            style={styles.settingsItem}>
            <View
              style={{
                backgroundColor: colors.yellow,
                padding: 10,
                borderRadius: 5,
              }}>
              <Icon
                type="FontAwesome5"
                name="user-edit"
                size={12}
                color="black"
              />
            </View>
            <Text style={styles.settingsText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push(pages.productForm)}
            style={styles.settingsItem}>
            <View
              style={{
                backgroundColor: colors.yellow,
                padding: 10,
                borderRadius: 5,
              }}>
              <Icon type="AntDesign" name="addfile" size={12} color="black" />
            </View>
            <Text style={styles.settingsText}>Submit a Product</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout} style={styles.settingsItem}>
            <View
              style={{
                backgroundColor: colors.yellow,
                padding: 10,
                borderRadius: 5,
              }}>
              <Icon type="Entypo" name="log-out" size={12} color="black" />
            </View>
            <Text style={styles.settingsText}>Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:+919778177858`)}
            style={styles.settingsItem}>
            <View
              style={{
                backgroundColor: colors.yellow,
                padding: 10,
                borderRadius: 5,
              }}>
              <Icon type="Ionicons" name="call" size={12} color="black" />
            </View>
            <Text style={styles.settingsText}>Contact us</Text>
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

    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsText: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: fonts.tertiary,
    marginLeft: 20,
  },
});

export default SettingsPage;
