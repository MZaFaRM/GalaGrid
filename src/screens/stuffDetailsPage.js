import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../assets/icons';
import Layout from '../components/layout';
import {
  EventSelectCard,
  ReviewRatings,
} from '../components/stuffDetailsComponents';
import {colors, fonts} from '../constants/constants';

const StuffDetailsPage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const [eventData, setEventData] = useState([
    {
      name: 'TechFest Hackathon',
      date: '12/12/2022',
      location: 'Kerala, India',
      image:
        'https://www.gl-events.com/sites/default/files/styles/max_2600x2600/public/2019-03/about_us.jpg?itok=G8TBpJbF',
      selected: false,
    },
    {
      name: 'TechFest Hackathon',
      date: '12/12/2022',
      location: 'Kerala, India',
      image:
        'https://watermark.lovepik.com/photo/20211120/large/lovepik-the-golden-wedding-stage-picture_500501082.jpg',
      selected: false,
    },
    {
      name: 'TechFest Hackathon',
      date: '12/12/2022',
      location: 'Kerala, India',
      image:
        'https://www.i-eventplanner.com/wp-content/uploads/revslider/Avada_Full_Width/Annual-Dinner-Event-planner.jpg',
      selected: false,
    },
    {
      name: 'TechFest Hackathon',
      date: '12/12/2022',
      location: 'Kerala, India',
      image:
        'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
      selected: false,
    },
  ]);

  const changeQuantity = text => {
    number = parseInt(text);
    if (isNaN(number) || number < 0) {
      setQuantity(0);
    } else {
      setQuantity(number);
    }
  };

  return (
    <Layout title="Details" navigation={navigation}>
      <ScrollView style={styles.container}>
        <View style={styles.stuffImagesBox}>
          <View style={styles.stuffImageBox}>
            <Image
              source={{
                uri: 'https://img.lovepik.com/photo/20211119/large/lovepik-cat-picture_500156655.jpg',
              }}
              style={styles.productImage}
            />
          </View>
        </View>
        <View style={styles.detailsBox}>
          <View style={styles.titleAndDescription}>
            <Text style={styles.productName}>Royal Sofa</Text>
            <Text style={styles.companyName}>Taj Light and Sounds</Text>
            <Text style={styles.address}>Kerala, India</Text>
            <View style={styles.productRating}>
              <Text style={styles.productRatingText}>5K</Text>
              <Icon type="AntDesign" name="star" size={15} color="yellow" />
              <Icon type="AntDesign" name="star" size={15} color="yellow" />
              <Icon type="AntDesign" name="star" size={15} color="yellow" />
              <Icon type="AntDesign" name="star" size={15} color="yellow" />
              <Icon type="AntDesign" name="star" size={15} color="grey" />
            </View>
            <Text style={styles.productDetails}>
              Daytona USA is an arcade racing game developed by Sega AM2 and
              published by Sega in March 1994. Inspired by the popularity of the
              NASCAR motor racing series in the US, the game has players race
              stock cars on one of three courses. It was the first arcade game
              to be released on the Sega Model 2, an arcade system board which
              was co-developed by GE Aerospace.
            </Text>
          </View>
        </View>
        <View style={styles.quantityBox}>
          <Text style={styles.quantityText}>Quantity: </Text>
          <TouchableOpacity onPress={() => changeQuantity(quantity + 1)}>
            <View style={styles.quantityChangeBox}>
              <Text style={styles.quantityChangeText}>+</Text>
            </View>
          </TouchableOpacity>
          <TextInput
            value={quantity.toString()}
            placeholderTextColor="white"
            keyboardType="numeric"
            textAlign="center"
            onChangeText={text => {
              changeQuantity(text);
            }}
            style={{margin: 0, padding: 0, width: 50}}
          />
          <TouchableOpacity onPress={() => changeQuantity(quantity - 1)}>
            <View style={styles.quantityChangeBox}>
              <Text style={styles.quantityChangeText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.continueBox}>
          <TouchableOpacity style={styles.callButton}>
            <Icon name={'call'} type={'Ionicons'} size={18} color={'white'} />
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.callButton, {marginHorizontal: 10}]}>
            <Icon
              name={'chatbox'}
              type={'Ionicons'}
              size={18}
              color={'white'}
            />
            <Text style={styles.callButtonText}>Chat</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            propagateSwipe={true}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <ScrollView style={{backgroundColor: 'black', padding: 50}}>
              <View style={styles.modalContainer}>
                <View contentContainerStyle={styles.modalBody}>
                  <Text style={styles.modalHead}>Select an Event</Text>
                  <Text style={styles.modalDescription}>
                    Add this product to an event to easily manage your orders,
                    later, when you need it, this product can be accessed from
                    the event tab by selecting that event.
                  </Text>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <TouchableOpacity
                      style={styles.cancelButton}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.continueButton}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.eventSelector}>
                    {eventData.map((event, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setEventData(prevState => {
                            const updatedEvents = [...prevState];
                            updatedEvents[index].selected =
                              !updatedEvents[index].selected;
                            return updatedEvents;
                          });
                        }}
                        style={[
                          styles.eventContainer,
                          event.selected && styles.selectedContainer,
                        ]}>
                        <EventSelectCard
                          navigation={navigation}
                          key={index}
                          event={event}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View>
                    <TouchableOpacity style={styles.modalCancelButton}>
                      <Icon
                        name={'back'}
                        type={'Entypo'}
                        size={14}
                        color={'white'}
                      />
                      <Text style={styles.modalCancelText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Modal>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={[
              styles.callButton,
              {backgroundColor: colors.yellow, flex: 1},
            ]}>
            <Icon
              name={'bag-add'}
              type={'Ionicons'}
              size={18}
              color={'black'}
            />
            <Text style={[styles.callButtonText, {color: 'black'}]}>
              Add to Event
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewsAndRatingsBox}>
          <Text style={styles.reviewsAndRatingsText}>Reviews & Ratings</Text>
          <ReviewRatings />
          <ReviewRatings />
          <ReviewRatings />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  stuffImagesBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    alignSelf: 'center',
  },
  stuffImageBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
  },
  detailsBox: {
    width: '100%',
    padding: 20,
  },
  productName: {
    fontFamily: fonts.primary,
    color: colors.yellow,
    fontSize: 35,
  },
  productDetails: {
    color: 'white',
    fontFamily: fonts.senary,
    fontSize: 14,
    marginTop: 10,
    lineHeight: 25,
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  productRatingText: {
    color: 'grey',
    marginRight: 10,
    fontSize: 15,
    fontFamily: fonts.primary,
  },
  companyName: {
    fontFamily: fonts.secondary,
    color: 'white',
    fontSize: 16,
  },
  address: {
    fontFamily: fonts.secondary,
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  quantityBox: {
    padding: 20,
    flexDirection: 'row',

    alignItems: 'center',
  },
  quantityText: {
    fontFamily: fonts.primary,
    color: 'white',
    fontSize: 20,
    marginRight: 25,
  },
  quantityChangeText: {
    fontSize: 25,
    color: 'black',
    fontFamily: fonts.primary,
    textAlignVertical: 'center',
  },
  quantityChangeBox: {
    width: 40,
    backgroundColor: colors.yellow,
    aspectRatio: 1,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBox: {
    padding: 25,
    flexDirection: 'row',
  },
  callButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,

    flexDirection: 'row',
    justifyContent: 'center',
  },
  callButtonText: {
    color: 'white',
    fontFamily: fonts.secondary,
    marginLeft: 10,
  },
  commentDescription: {
    marginLeft: 25,
    paddingRight: 30,
  },
  reviewsAndRatingsText: {
    fontFamily: fonts.primary,
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
  },
  reviewsAndRatingsBox: {
    margin: 20,
  },
  commenterName: {
    fontFamily: fonts.tertiary,
    fontSize: 15,
  },
  singleRating: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  profileName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    height: '100%',
    width: '100%',

    justifyContent: 'flex-end',
  },
  modalBody: {
    width: '100%',
    height: '80%',

    backgroundColor: 'black',
  },
  modalHead: {
    color: colors.yellow,
    fontFamily: fonts.primary,
    fontSize: 24,
    marginBottom: 20,
  },
  eventSelector: {
    marginBottom: 50,
  },
  modalDescription: {
    color: '#E5E1DA',
    fontFamily: fonts.senary,
    fontStyle: 'italic',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  modalCancelButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginHorizontal: 50,
    borderRadius: 10,
    flexDirection: 'row',
  },
  modalCancelText: {
    fontFamily: fonts.primary,
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
  },
  selectedContainer: {
    borderWidth: 2,
    borderColor: colors.yellow,
  },
  eventContainer: {
    backgroundColor: colors.secondary,

    overflow: 'hidden',
    paddingBottom: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flex: 1,
  },
  cancelButtonText: {
    color: 'white',
    fontFamily: fonts.primary,
    fontSize: 16,
    alignSelf: 'center',
  },
  continueButton: {
    backgroundColor: colors.yellow,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  continueButtonText: {
    color: 'black',
    fontFamily: fonts.primary,
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default StuffDetailsPage;
