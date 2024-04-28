import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {fonts, colors} from '../constants/constants';
import Icon from '../assets/icons';

export const ReviewRatings = () => (
  <View style={styles.singleRating}>
    <View style={styles.profileName}>
      <Image
        source={{
          uri: 'https://img.lovepik.com/photo/20211119/large/lovepik-cat-picture_500156655.jpg',
        }}
        width={25}
        height={25}
        borderRadius={50}
      />
    </View>
    <View style={styles.commentDescription}>
      <Text style={styles.commenterName}>Sheikh Minhaj</Text>
      <View style={styles.productRating}>
        <Icon type="AntDesign" name="star" size={15} color="yellow" />
        <Icon type="AntDesign" name="star" size={15} color="yellow" />
        <Icon type="AntDesign" name="star" size={15} color="yellow" />
        <Icon type="AntDesign" name="star" size={15} color="yellow" />
        <Icon type="AntDesign" name="star" size={15} color="grey" />
        <Text style={[styles.profileName, {marginLeft: 5}]}>25/1/2023</Text>
      </View>
      <Text style={styles.comment}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar
        consequat tortor, sit amet viverra libero. Vivamus dapibus varius nulla
        a lobortis. Morbi feugiat quis velit sit amet lobortis.
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
    singleRating: {
      marginBottom: 20,
      flexDirection: 'row',
    },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  commentDescription: {
    marginLeft: 25,
    paddingRight: 30,
  },
  commenterName: {
    fontFamily: fonts.secondary,
    fontSize: 16,
  },
  profileName: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  comment: {
    fontFamily: fonts.tertiary,
  },
});
