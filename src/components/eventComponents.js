import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from '../assets/icons';
import {colors, fonts, pages} from '../constants/constants';

export const EventCard = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(pages.eventDetails)}>
      <View style={styles.otherStuffBoxCardImageBox}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=740&t=st=1710891345~exp=1710891945~hmac=08b821b62f4da424990243e4b89ca7bdcfaf7b25913e626c276c3b19e71154fc',
          }}
          style={styles.otherStuffBoxCardImage}
        />
      </View>
      <View style={styles.otherStuffBoxCardDetails}>
        <Text style={styles.otherStuffName}>Scale Up Hackathon 2'24</Text>
        <View style={styles.eventDue}>
          <Text style={styles.eventDueText}>On 21 January 2024</Text>
        </View>
        <View style={styles.otherStuffLocation}>
          <Icon
            type="Entypo"
            name="location-pin"
            size={15}
            color={colors.yellow}
            style={{marginRight: 10}}
          />
          <Text style={styles.otherStuffLocationText}>Kerala, India</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 20,

    overflow: 'hidden',
    marginTop: 20,

    flexDirection: 'row',
    height: 120,
  },
  otherStuffBoxCardImageBox: {
    margin: 10,
  },
  otherStuffBoxCardImage: {
    aspectRatio: 1,
    height: 100,

    borderRadius: 20,
  },
  otherStuffBoxCardDetails: {
    marginVertical: 10,
    marginLeft: 20,

    flexShrink: 1,
    justifyContent: 'center',
  },
  otherStuffNameBox: {
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  otherStuffName: {
    color: 'white',
    fontFamily: fonts.primary,
    fontSize: 16,
    flexShrink: 1,
  },
  eventDue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventDueText: {
    color: 'grey',
    fontFamily: fonts.secondary,
    fontSize: 15,
    marginTop: 5,
  },
  otherStuffLocation: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10,
    alignSelf: 'baseline',
  },
  otherStuffLocationText: {
    color: colors.yellow,
    fontFamily: fonts.tertiary,
  },
});
