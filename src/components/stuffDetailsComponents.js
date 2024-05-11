import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../assets/icons';
import {colors, fonts} from '../constants/constants';

export const UserReviewRatings = ({
  userData,
  onSubmit,
  userReview,
  onDelete,
}) => {
  const [rating, setRating] = useState(userReview.rating || 0);
  const [comment, setComment] = useState(userReview.comment || '');
  const [date, setDate] = useState(``);

  useEffect(() => {
    if (userReview.created_at) {
      const userDate = new Date(userReview.created_at);
      setDate(
        `${userDate.getDate()}/${
          userDate.getMonth() + 1
        }/${userDate.getFullYear()}`,
      );
    }
  }, []);

  const [showEdit, setShowEdit] = useState(false);

  const [height, setHeight] = useState(0);
  const textInputRef = useRef(null);

  useEffect(() => {
    setComment(userReview.comment);
    setRating(userReview.rating);
  }, [showEdit]);

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
      <View
        style={styles.commentDescription}
        onTouchStart={() => {
          if (!showEdit) {
            setShowEdit(true);
          }
        }}>
        <Text style={[styles.commenterName, {color: 'white'}]}>
          {userData.first_name} (You)
        </Text>
        <View style={styles.productRating}>
          {[...Array(5)].map((e, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setRating(i + 1)}
              disabled={!showEdit}>
              <Icon
                type="AntDesign"
                name="star"
                size={showEdit ? 20 : 15}
                color={i < rating ? 'yellow' : 'grey'}
                key={i}
              />
            </TouchableOpacity>
          ))}
          <Text style={[styles.profileName, {marginLeft: 5}]}>{date}</Text>
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
            editable={showEdit}
            ref={textInputRef}
          />
        </View>
        {showEdit && (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            {userReview && (
              <TouchableOpacity
                style={[styles.postCommentButton, {backgroundColor: '#0E46A3'}]}
                onPress={() => setShowEdit(false)}>
                <Icon
                  type="AntDesign"
                  name="closesquare"
                  size={18}
                  color="#9AC8CD"
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[
                styles.postCommentButton,
                {flex: 1, marginHorizontal: 10},
              ]}
              onPress={() => onSubmit(rating, comment)}>
              <Text style={{color: 'black', fontFamily: fonts.primary}}>
                {userReview.rating > 0 ? 'Edit Review' : 'Post'}
              </Text>
            </TouchableOpacity>
            {userReview && (
              <TouchableOpacity
                style={[styles.postCommentButton, {backgroundColor: 'red'}]}
                disabled={!userReview.rating}
                onPress={onDelete}>
                <Icon type="Entypo" name="trash" size={18} color="white" />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export const ReviewRatings = ({commentData}) => (
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
          <Text style={styles.eventDueText} numberOfLines={3}>
            {event.description}
          </Text>
        </View>
        {/* <View style={styles.otherStuffLocation}>
          <Icon
            type="Entypo"
            name="location-pin"
            size={15}
            color={colors.yellow}
            style={{marginRight: 10}}
          />
          <Text style={styles.otherStuffLocationText}>{event.location}</Text>
        </View> */}
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
    flex: 1,
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
    fontFamily: fonts.quaternary,
    fontSize: 14,
    width: '100%',
    color: 'white',
  },
  comment: {
    fontFamily: fonts.quaternary,
    fontSize: 14,
    color: 'white',
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
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});
