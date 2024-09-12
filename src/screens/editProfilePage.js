import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { handleAuthError } from '../api/auth';
import { editUser, fetchUser } from '../api/user';
import Icon from '../assets/icons';
import MessageModal from '../components/errorModal';
import Layout from '../components/layout';
import { colors, fonts, pages } from '../constants/constants';

const EditProfile = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState({
    text: '',
    success: false,
  });

  const handleSubmit = async () => {
    try {
      if (!name.trim() || !mobile.trim()) {
        throw new Error('Full Name or Mobile cannot be empty');
      } else if (!/^\d{10}$/.test(mobile.trim())) {
        throw new Error('Mobile number should be a 10 digit number');
      }

      const productData = {
        first_name: name.trim(),
        mobile: mobile.trim(),
      };

      if (password.trim()) {
        productData.password = password.trim();
      }

      await editUser(productData);

      setMessage({
        text: 'Profile updated successfully',
        success: true,
      });
    } catch (error) {
      const getError = (error, attr) => {
        return error.response?.data.data[attr]?.[0];
      };

      setMessage({
        text:
          getError(error, 'first_name') ||
          getError(error, 'mobile') ||
          getError(error, 'password') ||
          error.message,
        success: false,
      });

      await handleAuthError(error, navigation);
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetchUser();
      setName(response.data.first_name);
      setMobile(response.data.mobile);
    } catch (error) {
      await handleAuthError(error, navigation);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await editUser({
        name,
        mobile,
        password,
      });
      setIsLoading(false);
      navigation.navigate(pages.settingsPage);
    } catch (error) {
      await handleAuthError(error, navigation);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout
      header={true}
      title={'Edit Profile'}
      navigation={navigation}
      currentPage={pages.productForm}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
        }>
        <View style={styles.header}>
          <Text style={styles.heading}>Edit Profile</Text>
          <Text style={styles.description}>
            Enter your details and submit to edit your profile
          </Text>
        </View>
        <View style={styles.productForm}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Text style={styles.inputLabel}>Mobile Number:</Text>
          <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="numeric"
          />
          <Text style={styles.inputLabel}>New Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isLoading}
            style={[styles.submitButtonBox]}>
            {isLoading ? (
              <ActivityIndicator size="small" color={'black'} />
            ) : (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  type={'FontAwesome5'}
                  size={16}
                  color={'black'}
                  name={'user-edit'}
                />
                <Text style={styles.submitButtonText}>Edit Profile</Text>
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

export default EditProfile;
