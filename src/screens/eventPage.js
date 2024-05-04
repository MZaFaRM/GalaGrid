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

const EventPage = ({navigation}) => {
  return (
    <Layout
      navigation={navigation}
      title={'Event Page'}
      footer={true}
      header={false}
      currentPage={pages.eventPage}>
      <ScrollView style={styles.container}>
        <View style={styles.bannerBox}>
          <Banner
            image={require('../assets/images/bannerBGEvent.jpg')}
            text={'Your events'}
          />
        </View>
        <View style={{marginBottom: 150, padding: 20}}>
          <TouchableOpacity style={styles.createEventButton}>
            <Icon
              type={'MaterialIcons'}
              name={'create'}
              size={14}
              color={'black'}
            />
            <Text
              style={{
                color: 'black',
                fontFamily: fonts.primary,
                marginLeft: 10,
              }}>
              Create an event
            </Text>
          </TouchableOpacity>
          <EventCard navigation={navigation} />
          <EventCard navigation={navigation} />
          <EventCard navigation={navigation} />
          <EventCard navigation={navigation} />
          <EventCard navigation={navigation} />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  createEventButton: {
    backgroundColor: colors.yellow,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    borderRadius: 10,
  },
});

export default EventPage;
