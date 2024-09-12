import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import {createProduct} from '../api/products';
import Icon from '../assets/icons';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';
import {handleAuthError} from '../api/auth';
import MessageModal from '../components/errorModal';

const ProductForm = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
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
  const [message, setMessage] = useState({
    text: '',
    success: false,
  });

  const nameInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const stateInputRef = useRef(null);
  const districtInputRef = useRef(null);
  const chatInputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const priceInputRef = useRef(null);
  const maxQuantityInputRef = useRef(null);

  const handleChooseImage = () => {
    const options = {
      title: 'Select Product Image',
      mediaType: 'photo',
      maxWidth: 1500,
      maxHeight: 1500,
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
    try {
      setIsLoading(true);
      if (
        !company.trim() ||
        !name.trim() ||
        !description.trim() ||
        !state.trim() ||
        !district.trim() ||
        !chat.trim() ||
        !mobile.trim() ||
        !price.trim() ||
        !maxQuantity.trim() ||
        !image
      ) {
        throw new Error('All fields are required');
      } else if (!/^\d{10}$/.test(mobile.trim())) {
        throw new Error('Mobile number should be a 10 digit number');
      } else if (!/^\d{10}$/.test(chat.trim())) {
        throw new Error('WhatsApp number should be 10 digits');
      } else if (!/^\d+$/.test(price.trim())) {
        throw new Error('Price should be a number');
      } else if (!/^\d+$/.test(maxQuantity.trim())) {
        throw new Error('Max Quantity should be a number');
      }
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
      setMessage({
        text: 'Product submitted successfully',
        success: true,
      });

      navigation.navigate(pages.settingsPage);
    } catch (error) {
      console.log(error);
      const getError = (error, attr) => {
        return error.response?.data.data[attr]?.[0];
      };

      setMessage({
        text:
          getError(error, 'company_name') ||
          getError(error, 'name') ||
          getError(error, 'description') ||
          getError(error, 'district') ||
          getError(error, 'state') ||
          getError(error, 'price') ||
          getError(error, 'chat') ||
          getError(error, 'mobile') ||
          getError(error, 'max_quantity') ||
          getError(error, 'encoded_image') ||
          error.message ||
          'Something went wrong',
        success: false,
      });
      await handleAuthError(error, navigation);
    } finally {
      setIsLoading(false);
    }
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
            Enter your product details and submit to click on submit to send
            your product to review.
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
            placeholder="Company Inc."
            placeholderTextColor="#D3D3D3"
            style={styles.input}
            value={company}
            onChangeText={setCompany}
            onSubmitEditing={() => nameInputRef.current.focus()}
          />
          <Text style={styles.inputLabel}>Product Name</Text>
          <TextInput
            placeholder="Product name"
            placeholderTextColor="#D3D3D3"
            style={styles.input}
            ref={nameInputRef}
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => descriptionInputRef.current.focus()}
          />
          <Text style={styles.inputLabel}>Description:</Text>
          <TextInput
            placeholderTextColor="#D3D3D3"
            placeholder="Product description"
            ref={descriptionInputRef}
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            onSubmitEditing={() => stateInputRef.current.focus()}
          />
          <Text style={styles.inputLabel}>State:</Text>
          <TextInput
            placeholderTextColor="#D3D3D3"
            placeholder="Eg: Kerala, Tamil Nadu, etc."
            ref={stateInputRef}
            style={styles.input}
            value={state}
            onChangeText={setState}
            onSubmitEditing={() => districtInputRef.current.focus()}
          />
          <Text style={styles.inputLabel}>District:</Text>
          <TextInput
            placeholderTextColor="#D3D3D3"
            placeholder="Eg: Kozhikode, Coimbatore, etc."
            ref={districtInputRef}
            style={styles.input}
            value={district}
            onChangeText={setDistrict}
            onSubmitEditing={() => mobileInputRef.current.focus()}
          />
          <Text style={styles.inputLabel}>Mobile Number:</Text>
          <TextInput
            placeholderTextColor="#D3D3D3"
            placeholder="10 digit number"
            ref={mobileInputRef}
            style={styles.input}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="numeric"
            onSubmitEditing={() => chatInputRef.current.focus()}
          />
          <Text style={styles.inputLabel}>WhatsApp Number:</Text>
          <TextInput
            placeholderTextColor="#D3D3D3"
            placeholder="10 digit WhatsApp number"
            ref={chatInputRef}
            style={styles.input}
            value={chat}
            onChangeText={setChat}
            keyboardType="numeric"
            onSubmitEditing={() => priceInputRef.current.focus()}
          />
          <Text style={styles.inputLabel}>Price:</Text>
          <TextInput
            placeholderTextColor="#D3D3D3"
            placeholder="Price in INR"
            ref={priceInputRef}
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            onSubmitEditing={() => maxQuantityInputRef.current.focus()}
          />
          <Text style={styles.inputLabel}>Max Quantity:</Text>
          <TextInput
            placeholderTextColor="#D3D3D3"
            placeholder="Maximum quantity available in stock"
            ref={maxQuantityInputRef}
            style={styles.input}
            value={maxQuantity}
            onChangeText={setMaxQuantity}
            keyboardType="numeric"
          />
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isLoading}
            style={[styles.submitButtonBox]}>
            {isLoading ? (
              <ActivityIndicator size="small" color={'black'} />
            ) : (
              <View style={{flexDirection: 'row'}}>
                <Icon
                  type={'MaterialCommunityIcons'}
                  size={20}
                  color={'black'}
                  name={'cube-send'}
                />
                <Text style={styles.submitButtonText}>Submit</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
      <MessageModal
        message={message.text}
        resetMessage={setMessage}
        success={message.success}
      />
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
    color: 'white',
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
  submitButtonBox: {
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    height: 40,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: fonts.primary,
    marginLeft: 10,
  },
});

export default ProductForm;
