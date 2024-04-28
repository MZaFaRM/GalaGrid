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
        <View style={{marginBottom: 150}}>
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
});

export default EventPage;
