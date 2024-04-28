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
import {Banner} from '../components/component';

const ListItem = <Text style={styles.listItem}>
    <Icon
        type="FontAwesome"
        name="check-circle"
        size={18}
        color="#90D26D" />
    {'\t\t'}Photographer
</Text>;
const EventDetailsPage = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <Layout title="Details" navigation={navigation}>
      <ScrollView style={styles.container}>
        <View style={styles.eventImagesBox}>
          <View style={styles.eventImageBox}>
            <Image
              source={{
                uri: 'https://img.lovepik.com/photo/20211119/large/lovepik-cat-picture_500156655.jpg',
              }}
              style={styles.eventImage}
            />
          </View>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.head}>Karma KMCT 2024</Text>
          <View style={styles.subHeadBox}>
            <Text style={styles.subHead}>Services</Text>
            <View style={styles.listItems}>
              {ListItem}
              <Text style={styles.listItem}>
                <Icon
                  type="FontAwesome"
                  name="check-circle"
                  size={18}
                  color="#90D26D"
                />
                {'\t\t'}Photographer
              </Text>
              <Text style={styles.listItem}>
                <Icon
                  type="FontAwesome"
                  name="check-circle"
                  size={18}
                  color="#90D26D"
                />
                {'\t\t'}Photographer
              </Text>
            </View>
          </View>
          <View style={styles.subHeadBox}>
            <Text style={styles.subHead}>Products</Text>
            <View style={styles.listItems}>
              <Text style={styles.listItem}>
                <Icon
                  type="FontAwesome"
                  name="check-circle"
                  size={18}
                  color="#90D26D"
                />
                {'\t\t'}4 x Chairs
              </Text>
            </View>
          </View>
          <View style={styles.subHeadBox}>
            <Text style={styles.subHead}>To Do</Text>
            <View style={styles.listItems}>
              <View style={styles.listItem}>
                <Icon
                  type="FontAwesome"
                  name="check-circle"
                  size={18}
                  color="#90D26D"
                />
                <TextInput
                  onChangeText={setText}
                  value={text}
                  multiline={true}
                  style={{
                    marginVertical: 0,
                    paddingVertical: 0,
                    textAlignVertical: 'top',
                    marginLeft: 4,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.subHeadBox}>
            <Text style={styles.subHead}>Notes</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={setText}
              value={text}
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  eventImagesBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    alignSelf: 'center',
  },
  eventImageBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventImage: {
    width: '100%',
    aspectRatio: 1,
  },
  dataContainer: {
    padding: 20,
  },
  head: {
    color: colors.yellow,
    fontFamily: fonts.primary,
    fontSize: 24,
    marginBottom: 15,
  },
  subHeadBox: {},
  subHead: {
    fontFamily: fonts.primary,
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
  },
  listItem: {
    color: 'white',
    fontFamily: fonts.tertiary,
    fontSize: 18,
    flexDirection: 'row',
    marginBottom: 10,
  },
  listItems: {
    marginBottom: 20,
  }
});

export default EventDetailsPage;
