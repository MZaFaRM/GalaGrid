import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from '../constants/constants';
import Icon from '../assets/icons';

const MessageModal = ({message, resetMessage, success = false}) => {
  const [visible, setVisible] = useState(!!message);

  useEffect(() => {
    setVisible(!!message);
    if (!message) {
      return;
    }

    setTimeout(() => {
      handleClose();
    }, 5000);
  }, [message]);

  const handleClose = () => {
    resetMessage('');
    setVisible(false);
  };

  return (
    <View style={{width: '100%', height: '100%'}} onTouchStart={handleClose}>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.container}>
          <View
            style={[
              styles.modal,
              success ? {borderColor: 'green'} : {borderColor: 'red'},
            ]}>
            <Text
              style={[
                styles.errorText,
                // success ? {color: 'green'} : {color: 'red'},
              ]}>
              {message}
            </Text>
            <TouchableOpacity
              onPress={handleClose}
              style={[
                styles.closeButton,
                success ? {backgroundColor: 'green'} : {backgroundColor: 'red'},
              ]}>
              <Icon
                name="close"
                size={14}
                style={styles.closeButton}
                type={'Ionicons'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 14,
    marginHorizontal: 30,
    fontFamily: fonts.primary,
  },
  closeButton: {
    padding: 2,
    borderRadius: 2,
    textAlign: 'center',
    color: 'white',
    fontFamily: fonts.primary,
  },
});

export default MessageModal;
