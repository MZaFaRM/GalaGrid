import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../assets/icons';
import {colors, fonts, pages} from '../constants/constants';

export const UserReviewRatings = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [height, setHeight] = useState(0);

  return (
    <View style={styles.singleRating}>
      <View style={styles.profileName}>
        <Image
          source={{
            uri: 'https://www.ageuk.org.uk/globalassets/age-uk/media/hero/sleeping-cat-crop.jpg',
          }}
          width={25}
          height={25}
          borderRadius={50}
        />
      </View>
      <View style={styles.commentDescription}>
        <Text style={[styles.commenterName, {color: 'white'}]}>
          Muhammed Zafar (You)
        </Text>
        <View style={styles.productRating}>
          {[...Array(5)].map((e, i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i + 1)}>
              <Icon
                type="AntDesign"
                name="star"
                size={20}
                color={i < rating ? 'yellow' : 'grey'}
                key={i}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <TextInput
            style={styles.userComment}
            value={comment}
            placeholder="Write your review here..."
            multiline
            onChangeText={setComment}
            numberOfLines={1}
            maxLength={200}
          />
        </View>
        <TouchableOpacity style={styles.postCommentButton}>
          <Text style={{color: 'black', fontFamily: fonts.primary}}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

export const EventSelectCard = ({navigation, event}) => {
  return (
    <>
      <View style={styles.otherStuffBoxCardImageBox}>
        <Image
          source={{
            uri: event.image,
          }}
          style={styles.otherStuffBoxCardImage}
        />
      </View>
      <View style={styles.otherStuffBoxCardDetails}>
        <Text style={styles.otherStuffName}>{event.name}</Text>
        <View style={styles.eventDue}>
          <Text style={styles.eventDueText}>On {event.date}</Text>
        </View>
        <View style={styles.otherStuffLocation}>
          <Icon
            type="Entypo"
            name="location-pin"
            size={15}
            color={colors.yellow}
            style={{marginRight: 10}}
          />
          <Text style={styles.otherStuffLocationText}>{event.location}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  singleRating: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
  userComment: {
    fontFamily: fonts.tertiary,
    fontSize: 14,
    width: '100%',
  },
  comment: {
    fontFamily: fonts.tertiary,
    fontSize: 14,
  },
  otherStuffBoxCardImageBox: {
    margin: 10,
  },
  otherStuffBoxCardImage: {
    aspectRatio: 1,

    borderRadius: 20,
  },
  otherStuffBoxCardDetails: {
    marginVertical: 10,
    marginLeft: 20,

    flexShrink: 1,
    justifyContent: 'center',
  },
  otherStuffNameBox: {
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  otherStuffName: {
    color: 'white',
    fontFamily: fonts.primary,
    fontSize: 16,
    flexShrink: 1,
  },
  eventDue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventDueText: {
    color: 'grey',
    fontFamily: fonts.secondary,
    fontSize: 15,
    marginTop: 5,
  },
  otherStuffLocation: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10,
    alignSelf: 'baseline',
  },
  otherStuffLocationText: {
    color: colors.yellow,
    fontFamily: fonts.tertiary,
  },
  postCommentButton: {
    backgroundColor: colors.yellow,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
});
