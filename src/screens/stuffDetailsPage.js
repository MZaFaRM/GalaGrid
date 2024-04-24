import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Layout from '../components/layout';
import Icon from '../assets/icons';

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
              width={300}
              height={400}
            />
          </View>
        </View>
        <View style={styles.detailsBox}>
          <View style={styles.titleAndDescription}>
            <Text style={styles.productName}>Royal Sofa</Text>
            <Text style={styles.companyName}>Taj Light and Sounds</Text>
            <View style={styles.productRating}>
              <Text style={styles.productRatingText}>4.0</Text>
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
        <View style={styles.reviewsAndRatingsBox}>
          <Text style={styles.reviewsAndRatingsText}>Reviews & Ratings</Text>
          <View style={styles.singleRating}>
            <View style={styles.profileName}>
              <Image
                source={{
                  uri: 'https://img.lovepik.com/photo/20211119/large/lovepik-cat-picture_500156655.jpg',
                }}
                width={30}
                height={30}
              />
              <Text>Sheikh Minhaj</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020b44',
  },
  stuffImagesBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    alignSelf: 'center',
  },
  stuffImageBox: {
    width: '50',
    height: '50',
  },
  detailsBox: {
    width: '100%',
    padding: 20,
  },
  productName: {
    fontFamily: 'Quicksand-Bold',
    color: 'white',
    fontSize: 28,
  },
  productDetails: {
    color: 'white',
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  productRatingText: {
    color: 'grey',
    marginRight: 10,
    fontSize: 15,
    fontFamily: 'Quicksand-Bold',
  },
  companyName: {
    fontFamily: 'Quicksand-Bold',
    color: 'white',
    fontSize: 16,
  },
  reviewsAndRatingsText: {
    fontFamily: 'Quicksand-Bold',
    color: 'white',
    fontSize: 28,
  },
  reviewsAndRatingsBox: {
    padding: 20,
  },
  singleRating: {},
  profileName: {
    flexDirection: 'row'
  },
});

export default StuffDetailsPage;
