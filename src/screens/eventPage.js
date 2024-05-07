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
  const [eventData, setEventData] = useState([]);
  const [newEvent, setNewEvent] = useState({
    image:
      'https://www.spict.org.uk/wp-content/uploads/2019/04/placeholder.png',
    name: 'Your Event Name',
    date: 'Your Date',
    location: 'Your Location',
  });
  const [emptyCards, setEmptyCards] = useState(0);
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
          <TouchableOpacity
            style={styles.createEventButton}
            onPress={() => setEmptyCards(emptyCards + 1)}>
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
          {emptyCards > 0 && (
            <View style={styles.recommendedStuffBoxCards}>
              {[...Array(emptyCards)].map((_, index) => (
                <EventCard
                  key={index}
                  navigation={navigation}
                  eventData={newEvent}
                />
              ))}
            </View>
          )}
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
