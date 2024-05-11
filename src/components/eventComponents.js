import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swipeable from 'react-native-swipeable';
import {handleAuthError} from '../api/auth';
import {deleteEvent} from '../api/events';
import Icon from '../assets/icons';
import {colors, fonts, pages} from '../constants/constants';

export const EventCard = ({navigation, eventData, onDelete}) => {
  const rightButtons = [
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => onDelete(eventData.id)}>
      <View style={styles.deleteButtonBox}>
        <Icon name="trash" size={20} color="white" type={'Entypo'} />
        <Text style={styles.deleteButtonText}>Delete</Text>
      </View>
    </TouchableOpacity>,
  ];

  return (
    <Swipeable rightButtons={rightButtons} rightButtonWidth={200}>
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
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 10,

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

    borderRadius: 10,
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
  deleteButton: {
    width: 800,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 0,
  },
  deleteButtonText: {
    color: 'white',
    fontFamily: fonts.primary,
    marginLeft: 10,
  },
  deleteButtonBox: {
    borderRadius: 10,
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    paddingLeft: 20,

    flexDirection: 'row',
    alignItems: 'center',
  },
});
