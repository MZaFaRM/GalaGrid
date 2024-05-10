import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../constants/constants';
import ErrorModal from '../components/errorModal';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitSignUp = async () => {
    try {
      if (mobile.length !== 10) {
        throw new Error('Mobile number should be 10 digits');
      }
      throw new Error('Error signing up');
    } catch (error) {
      setError(error.message);
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
          <Text style={styles.inputHead} onChangeText={setMobile}>
            Mobile
          </Text>
          <TextInput
            placeholder="Mobile"
            style={styles.inputBox}
            onChangeText={setPassword}
          />
          <Text style={styles.inputHead}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputBox}
          />
          <TouchableOpacity onPress={submitSignUp}>
            <Text style={styles.signUpButton}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.alreadyAccount}>Have an account already?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ErrorModal error={error} resetError={setError} />
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
