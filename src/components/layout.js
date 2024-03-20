import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from '../assets/icons';

const Header = ({navigation, title}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBox}>
          <Icon type={'AntDesign'} name={'left'} size={15} color={'black'} />
        </TouchableOpacity>
        <View style={styles.titleHeadBox}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </>
  );
};

const Layout = ({children, navigation, title}) => {
  return (
    <>
      <Header title={title} navigation={navigation} />
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  backBox: {
    aspectRatio: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'space-between',

    padding: 20,
    backgroundColor: '#020b44',
  },
  titleHeadBox: {
    flex: 1,
  },
  titleStyle: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Quicksand-Bold',
    marginLeft: 20,

    alignSelf: 'flex-end'
  },
});

export default Layout;
