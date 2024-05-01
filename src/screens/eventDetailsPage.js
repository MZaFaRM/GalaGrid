import React, {useEffect, useRef, useState} from 'react';
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
import {colors, fonts, pages} from '../constants/constants';
import {ReviewRatings} from '../components/stuffDetailsComponents';
import {Banner} from '../components/component';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-reanimated-table';
import {StretchOutY} from 'react-native-reanimated';

const ListItem = () => {
  const status = {
    pending: 'pending',
    confirmed: 'confirmed',
    cancelled: 'cancelled',
  };

  const statusColors = {
    pending: {
      background: '#222831',
      text: '#EEEEEE',
      border: '#31363F',
    },
    confirmed: {
      background: '#0A6847',
      text: '#EEEEEE',
      border: '#7ABA78',
    },
    cancelled: {
      background: '#DD5746',
      text: '#EEEEEE',
      border: '#8B322C',
    },
  };

  const [data, setData] = useState([
    {
      image:
        'https://www.pngitem.com/pimgs/m/206-2067128_cat-png-image-free-download-searchpng-cute-stuff.png',
      product: 'Royal Chair',
      quantity: 1,
      chat: '9778177858',
      status: status.pending,
    },
    {
      image:
        'https://wallpapers.com/images/hd/cool-dog-profile-picture-ajv9wf3wkzyi3igf.jpg',
      product: 'Peasant Chair',
      quantity: 100,
      chat: '9778177858',
      status: status.confirmed,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGy_LyTwbh0s621yRvhcJfyFPExWrQraO9gAtzEgI3wA&s',
      product: 'Volunteer Chair',
      quantity: 30,
      chat: '9778177858',
      status: status.cancelled,
    },
    {
      image:
        'https://static.vecteezy.com/system/resources/previews/004/944/798/non_2x/the-cool-shooter-ant-esport-mascot-design-vector.jpg',
      product: 'Manager Chair',
      quantity: 5,
      chat: '9778177858',
      status: status.pending,
    },
  ]);

  const state = data.map(item => [
    <View style={styles.productInfo}>
      <Image
        key={item.name}
        source={{
          uri: item.image,
        }}
        style={styles.listProfileImage}
      />
      <View style={{flex: 1}}>
        <Text key={item.name} style={styles.listText}>
          {item.quantity} x {item.product}
        </Text>
      </View>
    </View>,
    <TouchableOpacity
      style={styles.statusContainer}
      onPress={() =>
        setData(prev => {
          const updatedArray = [...prev];
          const updatedItem = {
            ...item,
            status:
              item.status === status.pending
                ? status.confirmed
                : item.status === status.confirmed
                ? status.cancelled
                : status.pending,
          };
          updatedArray[data.indexOf(item)] = updatedItem;
          return updatedArray;
        })
      }>
      <View
        style={[
          styles.statusBox,
          {
            backgroundColor: statusColors[item.status].background,
            borderRadius: 5,
            borderColor: statusColors[item.status].border,
            borderWidth: 2,
          },
        ]}>
        <Text
          style={[
            styles.listText,
            {
              fontFamily: fonts.secondary,
              fontSize: 12,
              marginLeft: 0,
              color: statusColors[item.status].text,
            },
          ]}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>,
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <View style={styles.listConnect}>
        <Icon name={'call'} type={'Ionicons'} size={18} color={'black'} />
        {/* item.chat, */}
      </View>
      <View
        style={[
          styles.listConnect,
          {backgroundColor: '#EE4266', marginLeft: 10},
        ]}>
        <Icon name={'chatbox'} type={'Ionicons'} size={18} color={'white'} />
        {/* item.chat, */}
      </View>
    </View>,
  ]);

  return (
    <Table>
      <Rows data={state} flexArr={[2, 1, 1]} />
    </Table>
  );
};

const EventDetailsPage = ({navigation}) => {
  const [toDo, setToDo] = useState([
    {
      text: 'Lorem Ipsum is simply dummy text',
      status: false,
    },
    {
      text: 'Contrary to popular belief, Lorem',
      status: true,
    },
    {
      text: 'Ipsum is not simply random text.',
      status: null,
    },
  ]);
  const [eventDetails, setEventDetails] = useState({
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  });
  const [notes, setNotes] = useState(
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  );

  const todoStates = {
    cancelled: 'times-circle',
    done: 'check-circle',
    none: 'minus-circle',
  };
  const todoColors = {
    red: '#DC143C',
    green: '#90D26D',
    grey: '#BFBFBF',
  };

  const emptyTodo = {text: '', status: null};

  return (
    <Layout title="Event Details" navigation={navigation}>
      <ScrollView style={styles.container}>
        <View style={styles.eventImagesBox}>
          <View style={styles.eventImageBox}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/b8/45/91/b84591f7dd03449b406304331ca991d3.jpg',
              }}
              style={styles.eventImage}
            />
          </View>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.headText}>Karma KMCT 2024</Text>
          <TextInput
            style={styles.headParagraph}
            multiline={true}
            value={eventDetails.description}
            onChangeText={text =>
              setEventDetails({...eventDetails, description: text})
            }
          />
          <View style={styles.subHeadBox}>
            <Text style={styles.subHead}>Goods</Text>
            <ListItem />
            <TouchableOpacity
              style={styles.buyMoreButton}
              onPress={() => navigation.navigate(pages.homePage)}>
              <Icon
                name="cart-plus"
                type="FontAwesome5"
                size={14}
                color="black"
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: fonts.primary,
                  marginLeft: 10,
                }}>
                Add Goods
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subHeadBox}>
            <Text style={styles.subHead}>To Do</Text>
            <View style={styles.listItems}>
              {toDo.map((item, index) => (
                <View style={styles.listItem} key={index}>
                  <TouchableOpacity
                    style={{flex: 1, alignItems: 'center'}}
                    onPress={() =>
                      setToDo(prev => {
                        const updatedArray = [...prev];
                        const newState =
                          item.status === null
                            ? true
                            : item.status === true
                            ? false
                            : null;
                        const updatedItem = {
                          ...item,
                          status: newState,
                        };
                        updatedArray[index] = updatedItem;
                        return updatedArray;
                      })
                    }>
                    <Icon
                      type="FontAwesome"
                      name={
                        item.status === false
                          ? todoStates.cancelled
                          : item.status === true
                          ? todoStates.done
                          : todoStates.none
                      }
                      size={24}
                      color={
                        item.status === false
                          ? todoColors.red
                          : item.status === true
                          ? todoColors.green
                          : todoColors.grey
                      }
                    />
                  </TouchableOpacity>
                  <TextInput
                    style={{
                      marginVertical: 0,
                      paddingVertical: 0,
                      flex: 10,
                    }}
                    onKeyPress={({nativeEvent}) => {
                      if (nativeEvent.key === 'Backspace' && item.text === '') {
                        setToDo(prev => {
                          const updatedArray = [...prev];
                          updatedArray.splice(index, 1);
                          return updatedArray;
                        });
                      } else if (nativeEvent.key === 'Enter') {
                        setToDo(prev => {
                          const updatedArray = [...prev];
                          updatedArray.splice(index + 1, 0, emptyTodo);
                          return updatedArray;
                        });
                      }
                    }}
                    onChangeText={value =>
                      setToDo(prev => {
                        const updatedArray = [...prev];
                        updatedArray[index].text = value;
                        return updatedArray;
                      })
                    }
                    onSubmitEditing={() =>
                      setToDo(prev => {
                        const updatedArray = [...prev];
                        updatedArray.splice(index + 1, 0, emptyTodo);
                        return updatedArray;
                      })
                    }
                    value={item.text}
                  />
                </View>
              ))}
            </View>
          </View>
          <View style={styles.subHeadBox}>
            <Text style={styles.subHead}>Notes</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={setNotes}
              value={notes}
              style={styles.notes}
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
  headText: {
    fontFamily: fonts.primary,
    color: colors.yellow,
    fontSize: 25,
    marginBottom: 5,
  },
  headParagraph: {
    color: '#bfbfbf',
    fontFamily: fonts.tertiary,
    fontSize: 14,
    lineHeight: 24,
  },
  subHeadBox: {
    marginBottom: 10,
  },
  subHead: {
    fontFamily: fonts.primary,
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40,
  },
  listText: {
    color: 'white',
    fontFamily: fonts.tertiary,
    fontSize: 14,
    marginLeft: 10,
    flexWrap: 'wrap',
  },
  listItems: {
    marginBottom: 20,
  },
  listProfileImage: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    alignSelf: 'center',
  },
  listConnect: {
    backgroundColor: colors.yellow,
    aspectRatio: 1,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  statusContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  statusBox: {
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  notes: {
    color: 'white',
    fontFamily: fonts.tertiary,
    fontSize: 14,
    lineHeight: 24,
  },
  buyMoreButton: {
    backgroundColor: colors.yellow,
    flex: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
});

export default EventDetailsPage;
