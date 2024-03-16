import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import HomePageBanner from '../assets/images/HomePageBanner.svg';
import Icon from '../assets/icons';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <HomePageBanner
        style={styles.background}
        height={'30%'}
        width={'100%'}
        preserveAspectRatio="X50Y50 slice"
      />
      <View style={styles.searchBox}>
        <Icon type="AntDesign" name="search1" size={20} color="white" />
        <TextInput placeholder="Search" />
        <View style={styles.filterBox}>
          <Icon type="Entypo" name="menu" size={20} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020b44',
    height: '100%',
    width: '100%',
  },
  searchBox: {
    backgroundColor: '#0b144b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  filterBox: {
    backgroundColor: '#5d3dfc',
    padding: 10,
    borderRadius: 10,
  }
});

export default HomePage;
