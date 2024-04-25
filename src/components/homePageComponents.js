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
    borderTopLeftRadius: 25,
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
