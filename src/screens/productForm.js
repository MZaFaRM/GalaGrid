import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import {createProduct} from '../api/products';
import Icon from '../assets/icons';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';

const ProductForm = () => {
  const navigation = useNavigation();

  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [chat, setChat] = useState('');
  const [mobile, setMobile] = useState('');
  const [price, setPrice] = useState('');
  const [maxQuantity, setMaxQuantity] = useState('');
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
      maxQuantity: 1,
      includeBase64: true,
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
        setImage({
          uri: response.assets[0].uri,
          base64: response.assets[0].base64,
        });
      }
    });
  };

  const handleSubmit = async () => {
    const productData = {
      company_name: company,
      name: name,
      description: description,
      district: district[0].toUpperCase() + district.slice(1),
      state: state[0].toUpperCase() + state.slice(1),
      price: price,
      chat: chat,
      mobile: mobile,
      max_quantity: maxQuantity,
      encoded_image: image.base64,
    };
    await createProduct(productData);
    navigation.navigate(pages.settingsPage);
  };

  return (
    <Layout
      header={true}
      title={'Product Form'}
      navigation={navigation}
      currentPage={pages.productForm}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Submit a Product</Text>
          <Text style={styles.description}>
            Enter your product details and submit to click on submit send your
            product to review.
          </Text>
        </View>
        <View style={styles.productForm}>
          <TouchableOpacity onPress={handleChooseImage}>
            <View style={styles.productImageBox}>
              <Image
                source={{
                  uri:
                    image?.uri ||
                    'https://www.spict.org.uk/wp-content/uploads/2019/04/placeholder.png',
                }}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleChooseImage}>
            <View style={styles.buttonBox}>
              <Icon type={'Entypo'} size={16} color={'black'} name={'images'} />
              <Text style={styles.buttonText}>Choose Image</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.inputLabel}>Company Name</Text>
          <TextInput
            style={styles.input}
            value={company}
            onChangeText={setCompany}
          />
          <Text style={styles.inputLabel}>Product Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Text style={styles.inputLabel}>Description:</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
          <Text style={styles.inputLabel}>State:</Text>
          <TextInput
            style={styles.input}
            value={state}
            onChangeText={setState}
          />
          <Text style={styles.inputLabel}>District:</Text>
          <TextInput
            style={styles.input}
            value={district}
            onChangeText={setDistrict}
          />
          <Text style={styles.inputLabel}>Mobile Number:</Text>
          <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="numeric"
          />
          <Text style={styles.inputLabel}>Chat:</Text>
          <TextInput
            style={styles.input}
            value={chat}
            onChangeText={setChat}
            keyboardType="numeric"
          />
          <Text style={styles.inputLabel}>Price:</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          <Text style={styles.inputLabel}>Max Quantity:</Text>
          <TextInput
            style={styles.input}
            value={maxQuantity}
            onChangeText={setMaxQuantity}
            keyboardType="numeric"
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.buttonBox, {marginTop: 20}]}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
    height: '100%',
    paddingHorizontal: 30,
  },
  productImageBox: {
    height: 300,
    alignItems: 'center',
    width: '100%',

    marginBottom: 20,
  },
  image: {
    aspectRatio: 1,
    flex: 1,
    borderRadius: 10,
  },
  heading: {
    color: colors.yellow,
    fontSize: 30,
    fontFamily: fonts.primary,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginVertical: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  inputLabel: {
    fontFamily: fonts.primary,
    color: 'yellow',
    fontSize: 16,
    marginBottom: 10,
  },
  productForm: {
    marginTop: 30,
    marginBottom: 100,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonBox: {
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: fonts.secondary,
    marginLeft: 10,
  },
});

export default ProductForm;
