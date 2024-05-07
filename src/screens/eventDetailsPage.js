import {React, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Rows, Table} from 'react-native-reanimated-table';
import Icon from '../assets/icons';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';

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

const EventDetailsPage = ({navigation, newEvent = true}) => {
  const [toDo, setToDo] = useState([
    {
      text: '',
      status: null,
    },
  ]);
  const [eventDetails, setEventDetails] = useState({
    title: null,
    description: null,
  });
  const [notes, setNotes] = useState('');

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
  const [image, setImage] = useState(null);

  const convertToBase64 = async imageUri => {
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const base64String = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      return base64String.replace('data:image/jpeg;base64,', ''); // Remove data URL prefix
    } catch (error) {
      console.error('Error converting image to base64:', error);
      throw error;
    }
  };

  const handleChooseImage = () => {
    const options = {
      title: 'Select Product Image',
      mediaType: 'photo',
      maxWidth: 5000,
      maxHeight: 5000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const base64Image = await convertToBase64(response.assets[0].uri);
        setImage({
          uri: response.assets[0].uri,
          base64: base64Image,
        });
      }
    });
  };

  return (
    <Layout title="Event Details" navigation={navigation}>
      <ScrollView style={styles.container}>
        <View style={styles.eventImagesBox}>
          <TouchableOpacity
            style={styles.eventImageBox}
            onPress={handleChooseImage}>
            <Image
              source={{
                uri:
                  image?.uri ||
                  'https://www.spict.org.uk/wp-content/uploads/2019/04/placeholder.png',
              }}
              style={styles.eventImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dataContainer}>
          <TextInput
            style={styles.headText}
            placeholder="Your event name here"
            value={eventDetails.title}
            onChangeText={text =>
              setEventDetails({...eventDetails, title: text})
            }
          />
          <TextInput
            style={styles.headParagraph}
            multiline={true}
            value={eventDetails.description}
            placeholder="Your event description here"
            onChangeText={text =>
              setEventDetails({...eventDetails, description: text})
            }
          />
          <View style={styles.subHeadBox}>
            <Text style={styles.subHead}>Goods</Text>
            {!newEvent && <ListItem />}
            <TouchableOpacity
              style={styles.buyMoreButton}
              onPress={() => navigation.push(pages.homePage)}>
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
                      color: 'white',
                    }}
                    placeholder="Add your todo text here"
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
              placeholder="Add your notes here"
              style={styles.notes}
            />
          </View>
        </View>
      </ScrollView>
      <Button
        title="Save"
        disabled={!(image || eventDetails.title || eventDetails.description)}
      />
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

    padding: 10,
  },
  headParagraph: {
    color: '#bfbfbf',
    fontFamily: fonts.tertiary,
    fontSize: 14,
    lineHeight: 24,

    padding: 10,
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
    paddingTop: 0,
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
