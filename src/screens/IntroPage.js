import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../assets/icons';
import GetStarted from '../assets/images/GetStarted.svg';
import { pages } from '../constants/constants';
const IntroPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <GetStarted
        style={styles.background}
        height={'100%'}
        width={'100%'}
        preserveAspectRatio="x50YMax slice"
      />
      <View style={styles.textBox}>
        <Text style={styles.headingText}>
          Find Event {'\n'}Rentals & Services
        </Text>
        <Text style={styles.bodyText}>
          Find event rentals and services easily with EventEase. From
          decorations to catering, everything you need is here. Simplify your
          event planning with us.
        </Text>
        <TouchableOpacity
          style={styles.GetStartedButton}
          onPress={() => navigation.replace(pages.homePage)}>
          <Text style={styles.footerText}>Get Started</Text>
          <Icon type="AntDesign" name="arrowright" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    zIndex: -1,
    position: 'absolute',
  },
  textBox: {
    width: '100%',
    paddingHorizontal: 50,
  },
  headingText: {
    fontFamily: 'Quicksand-SemiBold',
    color: 'white',
    fontSize: 30,
  },
  bodyText: {
    marginVertical: 20,
    fontFamily: 'Quicksand-Regular',
    color: '#D7D7D7',
    fontSize: 14,
  },
  footerText: {
    fontFamily: 'QuickSand-Medium',
    color: 'white',
    fontSize: 20,
    marginRight: 20,
  },
  GetStartedButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default IntroPage;
