import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {login, signUp} from '../api/auth';
import MessageModal from '../components/errorModal';
import {colors, fonts, pages} from '../constants/constants';
import {err} from 'react-native-svg';

const LoginPage = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({
    text: '',
    success: false,
  });

  const handleLogin = async () => {
    try {
      const strMobile = mobile.toString();
      await login(strMobile, password);
      navigation.navigate(pages.homePage);
    } catch (error) {
      const newError = {
        success: false,
        text:
          error.response?.data.message ||
          error.message ||
          'Something went wrong',
      };

      setMessage(newError);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>
          Welcome {'\n'}Back to{' '}
          <Text style={{color: colors.yellow}}>GalaGrid</Text>
        </Text>
        <View style={styles.form}>
          <Text style={styles.inputHead}>Mobile</Text>
          <TextInput
            placeholder="Mobile"
            style={styles.inputBox}
            onChangeText={setMobile}
            inputMode="numeric"
          />
          <Text style={styles.inputHead}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputBox}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleLogin}>
            {isLoading ? (
              <ActivityIndicator size="small" color={'black'} />
            ) : (
              <Text style={styles.signUpButton}>Login</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(pages.signUpPage)}>
            <Text style={styles.alreadyAccount}>Don't have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <MessageModal
        message={message.text}
        resetMessage={setMessage}
        success={message.success}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
  },
  header: {
    fontSize: 50,
    fontFamily: fonts.primary,
    color: 'white',
  },
  formContainer: {
    padding: 20,
    backgroundColor: 'black',
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  form: {
    marginTop: 30,
  },
  inputHead: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.primary,
  },
  inputBox: {
    borderColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: fonts.secondary,
  },
  signUpButton: {
    backgroundColor: colors.yellow,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.primary,
  },
  alreadyAccount: {
    color: 'white',
    textAlign: 'right',
    fontSize: 16,
    fontFamily: fonts.secondary,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontFamily: fonts.primary,
    fontSize: 20,
  },
});

export default LoginPage;
