import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
  RefreshControl,
} from 'react-native';
import Icon from '../assets/icons';
import Layout from '../components/layout';
import {
  EventSelectCard,
  ReviewRatings,
  UserReviewRatings,
} from '../components/stuffDetailsComponents';
import {colors, fonts} from '../constants/constants';
import {fetchProduct, saveToEvents} from '../api/products';
import {fetchEvent} from '../api/events';

const StuffDetailsPage = ({navigation, route}) => {
  const {productID} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState('1');
  const [productData, setProductData] = useState({});
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedEvents, setSelectedEvents] = useState([]);

  const changeQuantity = text => {
    const number = parseInt(text);
    if (isNaN(number) || number < 1) {
      setQuantity('1');
    } else if (number > productData.max_quantity) {
      setQuantity(productData.max_quantity.toString());
    } else {
      setQuantity(number.toString());
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetchProduct(productID);
      setProductData(response.data);
      const eventResponse = await fetchEvent();
      setEventData(eventResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.response.data);
    }
  };

  const onModelSubmit = async () => {
    setModalVisible(false);
    const selectedEvents = eventData
      .filter(event => event.selected)
      .map(event => ({
        event: event.id,
        quantity: parseInt(quantity),
        product: productID,
      }));

    setIsLoading(true);
    console.log(selectedEvents);
    await saveToEvents(selectedEvents);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    fetchData();
  }, []);

  return (
    <Layout title="Details" navigation={navigation}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        {!isLoading && (
          <>
            <View style={styles.stuffImagesBox}>
              <View style={styles.stuffImageBox}>
                <Image
                  source={{
                    uri: productData.image,
                  }}
                  style={styles.productImage}
                />
              </View>
            </View>
            <View style={styles.detailsBox}>
              <View style={styles.titleAndDescription}>
                <Text style={styles.productName}>{productData.name}</Text>
                <Text style={styles.companyName}>
                  {productData.company_name}
                </Text>
                <Text style={styles.address}>
                  {productData.district}, {productData.state}
                </Text>
                <View style={styles.productRating}>
                  <Text style={styles.productRatingText}>5K</Text>
                  <Icon type="AntDesign" name="star" size={15} color="yellow" />
                  <Icon type="AntDesign" name="star" size={15} color="yellow" />
                  <Icon type="AntDesign" name="star" size={15} color="yellow" />
                  <Icon type="AntDesign" name="star" size={15} color="yellow" />
                  <Icon type="AntDesign" name="star" size={15} color="grey" />
                </View>
                <Text style={styles.productDetails}>
                  {productData.description}
                </Text>
              </View>
            </View>
            <View style={styles.quantityBox}>
              <Text style={styles.quantityText}>
                Quantity {''}
                <Text style={{fontSize: 14, fontFamily: fonts.tertiary}}>
                  max {productData.max_quantity}
                </Text>
              </Text>
              <TouchableOpacity
                onPress={() => changeQuantity(parseInt(quantity) + 1)}>
                <View style={styles.quantityChangeBox}>
                  <Text style={styles.quantityChangeText}>+</Text>
                </View>
              </TouchableOpacity>
              <TextInput
                value={quantity}
                placeholderTextColor="white"
                keyboardType="numeric"
                textAlign="center"
                onChangeText={setQuantity}
                onEndEditing={() => changeQuantity(quantity)}
                style={{margin: 0, padding: 0, width: 50}}
              />
              <TouchableOpacity
                onPress={() => changeQuantity(parseInt(quantity) - 1)}>
                <View style={styles.quantityChangeBox}>
                  <Text style={styles.quantityChangeText}>-</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.continueBox}>
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => Linking.openURL(`tel:${productData.mobile}`)}>
                <Icon
                  name={'call'}
                  type={'Ionicons'}
                  size={18}
                  color={'white'}
                />
                <Text style={styles.callButtonText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.callButton, {marginHorizontal: 10}]}
                onPress={() =>
                  Linking.openURL(
                    `https://wa.me/+91${
                      productData.chat
                    }?text=${encodeURIComponent(
                      `Hi there! this message is regarding the ${productData.max_quantity} x ${productData.name} that was featured under the company ${productData.company_name} on GalaGrid. Can we talk?`,
                    )}`,
                  )
                }>
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
                        Add this product to an event to easily manage your
                        orders, later, when you need it, this product can be
                        accessed from the event tab by selecting that event.
                      </Text>
                      <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <TouchableOpacity
                          style={styles.cancelButton}
                          onPress={onModelSubmit}>
                          <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.continueButton}
                          onPress={onModelSubmit}>
                          <Text style={styles.continueButtonText}>
                            Continue
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.eventSelector}>
                        {eventData.map((event, index) => (
                          <TouchableOpacity
                            key={index}
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
              <Text style={styles.reviewsAndRatingsText}>
                Reviews & Ratings
              </Text>
              <UserReviewRatings />
              <ReviewRatings />
              <ReviewRatings />
              <ReviewRatings />
            </View>
          </>
        )}
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
    paddingHorizontal: 20,
    paddingVertical: 0,
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
