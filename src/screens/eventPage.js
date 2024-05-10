import React, {useCallback, useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fetchEvent} from '../api/events';
import Icon from '../assets/icons';
import {Banner} from '../components/component';
import {EventCard} from '../components/eventComponents';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';

import {cleanData} from '../utils/events';

const EventPage = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState([]);
  const [newEvent, setNewEvent] = useState({
    image:
      'https://www.spict.org.uk/wp-content/uploads/2019/04/placeholder.png',
    name: 'Your event name',
    description: 'Your event description',
    location: 'Your Location',
  });
  const [emptyCards, setEmptyCards] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    setEmptyCards(1);
    const response = await fetchEvent();
    setEventData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          {!isLoading && (
            <>
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
              <View>
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
                {eventData.length > 0 && (
                  <View style={styles.recommendedStuffBoxCards}>
                    {eventData.map((event, index) => (
                      <EventCard
                        key={index}
                        navigation={navigation}
                        eventData={event}
                      />
                    ))}
                  </View>
                )}
              </View>
            </>
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
