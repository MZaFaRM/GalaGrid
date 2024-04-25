import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from '../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts, pages} from '../constants/constants';

export const RecommendedStuffBoxCard = ({
  productID,
  company,
  name,
  image,
  itemCount,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={stuffBoxCardStyles.stuffBox}
      onPress={() => navigation.navigate(pages.stuffDetailsPage)}>
      <Image
        source={{
          uri: image,
        }}
        style={stuffBoxCardStyles.stuffImage}
      />
      <View style={stuffBoxCardStyles.stuffDetails}>
        <Text style={stuffBoxCardStyles.companyName}>{company}</Text>
        <Text style={stuffBoxCardStyles.stuffName} numberOfLines={1}>
          {itemCount} × {name}
        </Text>
        <View style={stuffBoxCardStyles.stuffOther}>
          <View style={stuffBoxCardStyles.stuffLocation}>
            <Text style={stuffBoxCardStyles.stuffLocationText}>
              Kerala, India
            </Text>
          </View>
          <View style={stuffBoxCardStyles.stuffRatingBox}>
            <Text style={stuffBoxCardStyles.stuffRatingText}>
              5K{'\t'}
              <Icon
                type="AntDesign"
                name="star"
                size={14}
                color={colors.tertiary}
              />
              <Icon
                type="AntDesign"
                name="star"
                size={14}
                color={colors.tertiary}
              />
              <Icon
                type="AntDesign"
                name="star"
                size={14}
                color={colors.tertiary}
              />
              <Icon
                type="AntDesign"
                name="star"
                size={14}
                color={colors.tertiary}
              />
              <Icon type="AntDesign" name="star" size={14} color="grey" />
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stuffBoxCardStyles = StyleSheet.create({
  stuffBox: {
    width: '45%',
    margin: 5,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  stuffImage: {
    aspectRatio: 1,
  },
  stuffDetails: {
    backgroundColor: colors.secondary,
    padding: 20,
  },
  stuffName: {
    color: colors.tertiary,
    fontFamily: fonts.secondary,
    fontSize: 14,
  },
  companyName: {
    color: 'white',
    fontFamily: fonts.secondary,
    fontSize: 16,
    marginBottom: 5,
  },
  stuffOther: {
    flex: 1,
  },
  stuffRent: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  stuffRentButton: {
    backgroundColor: colors.tertiary,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  stuffRentButtonText: {
    color: colors.quaternary,
    fontFamily: fonts.primary,
  },
  stuffLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stuffLocationText: {
    color: colors.senary,
    fontFamily: fonts.secondary,
    fontSize: 14,
  },
  stuffRatingBox: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stuffRatingText: {
    color: 'grey',
    fontSize: 15,
    fontFamily: fonts.primary,
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
          color={colors.tertiary}
          style={{marginRight: 10}}
        />
        <Text style={styles.otherStuffLocationText}>Kerala, India</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
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
    color: colors.tertiary,
    fontFamily: 'Quicksand-Bold',
  },
});
