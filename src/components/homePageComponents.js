import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from '../assets/icons';
import {useNavigation} from '@react-navigation/native';
import pages from '../constants/pages';

export const RecommendedStuffBoxCard = () => {
  const navigation = useNavigation();
  return (
    <View style={stuffBoxCardStyles.stuffBox}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/flat-smiling-college-university-students-with-books_88138-859.jpg',
        }}
        style={stuffBoxCardStyles.stuffImage}
      />
      <View style={stuffBoxCardStyles.stuffDetails}>
        <Text style={stuffBoxCardStyles.stuffDate}>25 Jan 2023</Text>
        <Text style={stuffBoxCardStyles.stuffName}>
          4 Human Organ Donations{'\n'}
        </Text>
        <View style={stuffBoxCardStyles.stuffRentAndOther}>
          <View style={stuffBoxCardStyles.stuffOther}>
            <View style={stuffBoxCardStyles.stuffLocation}>
              <Icon
                type="Entypo"
                name="location-pin"
                size={15}
                color="#5d3dfc"
                style={{marginRight: 10}}
              />
              <Text style={stuffBoxCardStyles.stuffLocationText}>
                Kerala, India
              </Text>
            </View>
            <View style={stuffBoxCardStyles.stuffRatingBox}>
              <Text style={stuffBoxCardStyles.stuffRatingText}>4.0</Text>
              <Icon type="AntDesign" name="star" size={15} color="yellow" />
              <Icon type="AntDesign" name="star" size={15} color="yellow" />
              <Icon type="AntDesign" name="star" size={15} color="yellow" />
              <Icon type="AntDesign" name="star" size={15} color="yellow" />
              <Icon type="AntDesign" name="star" size={15} color="grey" />
            </View>
          </View>
          <View style={stuffBoxCardStyles.stuffRent}>
            <TouchableOpacity
              style={stuffBoxCardStyles.stuffRentButton}
              onPress={() => navigation.navigate(pages.stuffDetailsPage)}>
              <Text style={stuffBoxCardStyles.stuffRentButtonText}>RENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const stuffBoxCardStyles = StyleSheet.create({
  stuffBox: {
    width: 300,
    margin: 20,
    borderRadius: 20,

    overflow: 'hidden',
  },
  stuffImage: {
    height: 200,
    width: '100%',
  },
  stuffDetails: {
    flex: 1,
    width: '100%',
    backgroundColor: '#161851',
    padding: 20,
  },
  stuffDate: {
    color: 'grey',
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
  },
  stuffName: {
    color: 'white',
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
    marginVertical: 8,
  },
  stuffRentAndOther: {
    flexDirection: 'row',
  },
  stuffOther: {
    flex: 1,
  },
  stuffRent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stuffRentButton: {
    backgroundColor: '#0f0f30',
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  stuffRentButtonText: {
    color: '#5d3dfc',
    fontFamily: 'Quicksand-Bold',
  },
  stuffLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stuffLocationText: {
    color: '#5d3dfc',
    fontFamily: 'Quicksand-Bold',
  },
  stuffRatingBox: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '35%',
  },
  stuffRatingText: {
    color: 'grey',
    marginRight: 10,
    fontSize: 15,
    fontFamily: 'Quicksand-Bold',
  },
});

export const OtherStuffBoxCards = () => (
  <View style={styles.container}>
    <View style={styles.otherStuffBoxCardImageBox}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=740&t=st=1710891345~exp=1710891945~hmac=08b821b62f4da424990243e4b89ca7bdcfaf7b25913e626c276c3b19e71154fc',
        }}
        style={styles.otherStuffBoxCardImage}
      />
    </View>
    <View style={styles.otherStuffBoxCardDetails}>
      <Text style={styles.otherStuffName}>1 Human Organ Donations</Text>
      <View style={styles.otherStuffMinorDetails}>
        <Icon type={'Entypo'} name={'eye'} size={20} color={'grey'} />
        <Text style={styles.otherStuffMinorDetailsText}>4.4k</Text>
        <Icon type={'Entypo'} name={'heart'} size={20} color={'grey'} />
        <Text style={styles.otherStuffMinorDetailsText}>350</Text>
      </View>
      <View style={styles.otherStuffLocation}>
        <Icon
          type="Entypo"
          name="location-pin"
          size={15}
          color="#5d3dfc"
          style={{marginRight: 10}}
        />
        <Text style={styles.otherStuffLocationText}>Kerala, India</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161851',
    borderRadius: 20,

    overflow: 'hidden',
    margin: 20,
    marginBottom: 0,

    flexDirection: 'row',
    height: 120,
  },
  otherStuffBoxCardImageBox: {
    margin: 10,
  },
  otherStuffBoxCardImage: {
    aspectRatio: 1,
    height: 100,

    borderRadius: 20,
  },
  otherStuffBoxCardDetails: {
    marginVertical: 10,
    marginLeft: 20,

    flexShrink: 1,
  },
  otherStuffNameBox: {
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  otherStuffName: {
    color: 'white',
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
    flexShrink: 1,
  },
  otherStuffMinorDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otherStuffMinorDetailsText: {
    color: 'grey',
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    marginHorizontal: 10,
  },
  otherStuffLocation: {
    flexDirection: 'row',
    alignItems: 'center',

    flex: 1,
    alignSelf: 'baseline',
  },
  otherStuffLocationText: {
    color: '#5d3dfc',
    fontFamily: 'Quicksand-Bold',
  },
});
