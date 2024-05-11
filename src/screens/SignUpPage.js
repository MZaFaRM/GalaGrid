import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {signUp} from '../api/auth';
import MessageModal from '../components/errorModal';
import {colors, fonts, pages} from '../constants/constants';
import {err} from 'react-native-svg';

const SignUp = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({
    text: '',
    success: false,
  });

  const handleSignUp = async () => {
    const strMobile = mobile.toString();
    try {
      if (!(fullName || strMobile || password)) {
        throw new Error('Please fill all fields');
      } else if (!/^\d{10}$/.test(strMobile)) {
        throw new Error('Mobile number should be a 10 digit number');
      }

      const userData = {
        username: `${strMobile}@galagrid.org`,
        first_name: fullName.trim(),
        mobile: strMobile,
        password: password,
      };
      await signUp(userData);
      navigation.navigate(pages.loginPage);
    } catch (error) {
      const getError = attr => {
        return error.response?.data.data[attr]?.[0];
      };

      const newError = {
        success: false,
        text:
          getError('mobile') ||
          getError('username') ||
          getError('first_name') ||
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
          Welcome {'\n'}to <Text style={{color: colors.yellow}}>GalaGrid</Text>
        </Text>
        <View style={styles.form}>
          <Text style={styles.inputHead}>Full Name</Text>
          <TextInput
            placeholder="Full Name"
            style={styles.inputBox}
            onChangeText={setFullName}
          />
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
          <TouchableOpacity onPress={handleSignUp}>
            {isLoading ? (
              <ActivityIndicator size="small" color={'black'} />
            ) : (
              <Text style={styles.signUpButton}>Sign Up</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(pages.loginPage)}>
            <Text style={styles.alreadyAccount}>Have an account already?</Text>
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

export default SignUp;
