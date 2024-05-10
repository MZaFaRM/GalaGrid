import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../assets/icons';
import {colors, fonts, pages} from '../constants/constants';

export const EventCard = ({navigation, eventData}) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(pages.eventDetails, {
          eventID: eventData.id,
        })
      }>
      <View style={styles.otherStuffBoxCardImageBox}>
        <Image
          source={{
            uri: eventData.image,
          }}
          style={styles.otherStuffBoxCardImage}
        />
      </View>
      <View style={styles.otherStuffBoxCardDetails}>
        <Text style={styles.otherStuffName}>{eventData.name}</Text>
        <View style={styles.eventDue}>
          <Text style={styles.eventDueText} numberOfLines={3}>
            {eventData.description}
          </Text>
        </View>
        {/* <View style={styles.otherStuffLocation}>
          <Icon
            type="Entypo"
            name="location-pin"
            size={15}
            color={colors.yellow}
            style={{marginRight: 5}}
          />
          <Text style={styles.otherStuffLocationText}>
            {eventData.location}
          </Text>
        </View> */}
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
