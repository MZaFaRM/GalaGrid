import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from '../assets/icons';

export const StuffBoxCard = () => (
    <View style={stuffBoxCardStyles.stuffBox}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/flat-smiling-college-university-students-with-books_88138-859.jpg',
        }}
        style={stuffBoxCardStyles.stuffImage}
      />
      <View style={stuffBoxCardStyles.stuffDetails}>
        <Text style={stuffBoxCardStyles.stuffDate}>25 Jan 2023</Text>
        <Text style={stuffBoxCardStyles.stuffName}>4 Human Organ Donations{'\n'}</Text>
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
              <Text style={{color: '#5d3dfc'}}>Kerala, India</Text>
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
            <TouchableOpacity style={stuffBoxCardStyles.stuffRentButton}>
              <Text style={stuffBoxCardStyles.stuffRentButtonText}>RENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  
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
  