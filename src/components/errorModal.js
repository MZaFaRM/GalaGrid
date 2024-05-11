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
    if (!visible) {
      return;
    }
    
    console.log('Error logged:', message);
    setVisible(!!message);

    setTimeout(() => {
      handleClose();
    }, 5000);
  }, [message]);

  const handleClose = () => {
    resetMessage('');
    setVisible(false);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View
          style={[
            styles.modal,
            success ? {borderColor: 'green'} : {borderColor: 'red'},
          ]}>
          <Text style={styles.errorText}>{message}</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
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
    borderColor: 'red',
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 14,
    color: 'white',
    marginRight: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 2,
    textAlign: 'center',
    color: 'white',
    fontFamily: fonts.primary,
  },
});

export default MessageModal;
