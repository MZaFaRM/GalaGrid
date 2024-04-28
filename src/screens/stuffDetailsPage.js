import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Layout from '../components/layout';
import Icon from '../assets/icons';
import {colors, fonts} from '../constants/constants';
import {ReviewRatings} from '../components/stuffDetailsComponents';

const StuffDetailsPage = ({navigation}) => {
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
          <TouchableOpacity>
            <View style={styles.quantityChangeBox}>
              <Text style={styles.quantityChangeText}>+</Text>
            </View>
          </TouchableOpacity>
          <TextInput
            placeholder="0"
            placeholderTextColor="white"
            keyboardType="numeric"
            textAlign="center"
            style={{marginBottom: 0, paddingBottom: 0, width: 50}}
          />
          <TouchableOpacity>
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
          <TouchableOpacity style={[styles.callButton, { marginHorizontal: 10}]}>
            <Icon name={'chatbox'} type={'Ionicons'} size={18} color={'white'} />
            <Text style={styles.callButtonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
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
});

export default StuffDetailsPage;
