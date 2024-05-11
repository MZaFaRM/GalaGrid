import React, {useCallback, useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {deleteEvent, fetchEvent} from '../api/events';
import Icon from '../assets/icons';
import {Banner} from '../components/component';
import {EventCard} from '../components/eventComponents';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';

import {handleAuthError} from '../api/auth';
import {useFocusEffect} from '@react-navigation/native';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const EventPage = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState([]);
  const [newEvent, setNewEvent] = useState({
    image:
      'https://www.spict.org.uk/wp-content/uploads/2019/04/placeholder.png',
    name: 'Your Event Name',
    description: 'Your Event Description',
  });
  const [emptyCards, setEmptyCards] = useState([]);

  const handleDelete = async (id = null) => {
    try {
      const response = await deleteEvent(id);
      await fetchData();
    } catch (error) {
      await handleAuthError(error, navigation);
      console.error('Error deleting event:', error);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetchEvent();
    setEventData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  const onRefresh = useCallback(() => {
    fetchData();
  }, []);

  return (
    <Layout
      navigation={navigation}
      title={'Event Page'}
      footer={true}
      header={false}
      currentPage={pages.eventPage}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        <View style={styles.bannerBox}>
          <Banner
            image={require('../assets/images/bannerBGEvent.jpg')}
            text={'Your events'}
          />
        </View>
        <View style={{marginBottom: 150, padding: 20}}>
          <TouchableOpacity
            style={styles.createEventButton}
            onPress={() =>
              setEmptyCards(prev => [...prev, uuidv4({length: 8})])
            }>
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
          <View>
            {emptyCards.length > 0 && (
              <View style={styles.recommendedStuffBoxCards}>
                {emptyCards.map(id => (
                  <EventCard
                    key={id}
                    navigation={navigation}
                    eventData={newEvent}
                    onDelete={() =>
                      setEmptyCards(prev => prev.filter(item => item !== id))
                    }
                  />
                ))}
              </View>
            )}
            {eventData.length > 0 && (
              <View style={styles.recommendedStuffBoxCards}>
                {eventData.map((event, index) => (
                  <EventCard
                    key={event.id}
                    navigation={navigation}
                    eventData={event}
                    onDelete={handleDelete}
                  />
                ))}
              </View>
            )}
          </View>
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
