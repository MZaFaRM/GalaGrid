import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from '../assets/icons';
import {colors, fonts, pages} from '../constants/constants';

const Header = ({navigation, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backBox}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon type={'AntDesign'} name={'left'} size={24} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleHeadBox}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

const Footer = ({navigation, currentPage}) => {
  return (
    <View style={styles.footerContainer}>
      {[
        {
          key: 1,
          page: pages.homePage,
          icon: {
            name: 'home',
            type: 'AntDesign',
            size: 22,
          },
        },
        {
          key: 2,
          page: pages.eventPage,
          icon: {
            name: 'event-seat',
            type: 'MaterialIcons',
            size: 22,
          },
        },
        {
          key: 3,
          page: pages.settingsPage,
          icon: {
            name: 'settings',
            type: 'Ionicons',
          },
        },
      ].map(item => (
        <TouchableOpacity
          key={item.key}
          onPress={() => navigation.navigate(item.page)}
          style={[
            styles.footerIconBox,
            currentPage === item.page
              ? {borderColor: colors.yellow}
              : {borderColor: 'white'},
          ]}>
          <Icon
            name={item.icon.name}
            type={item.icon.type}
            size={22}
            color={currentPage === item.page ? colors.yellow : 'white'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Layout = ({
  children,
  navigation,
  title,
  header = true,
  footer = false,
  currentPage = null,
}) => {
  return (
    <>
      {header && <Header title={title} navigation={navigation} />}
      {children}
      {footer && <Footer navigation={navigation} currentPage={currentPage} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'space-between',

    paddingVertical: 20,
    backgroundColor: 'black',

    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 40,
  },
  backBox: {
    justifyContent: 'flex-start',
  },
  backButton: {
    aspectRatio: 1,
    borderRadius: 5,
  },
  titleHeadBox: {
    justifyContent: 'center',
    width: '100%',
  },
  titleStyle: {
    color: 'white',
    fontSize: 25,
    fontFamily: fonts.tertiary,
    marginLeft: 20,

    alignSelf: 'flex-end',
  },
  footerContainer: {
    height: 70,
    bottom: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 15,
  },

  footerIconBox: {
    marginHorizontal: 30,
    borderBottomWidth: 2,
    paddingBottom: 5,
    // borderBottomColor: 'yellow',
  },
});

export default Layout;
