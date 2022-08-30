import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Theme } from '../theme/theme';

interface CustomModalProps {
  children: React.ReactNode;
  visible: boolean;
  toggle: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ children, visible, toggle }) => {
  return (
    <Modal
      useNativeDriver
      animationInTiming={400}
      animationOutTiming={400}
      hideModalContentWhileAnimating
      isVisible={visible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={toggle}>
      <View style={styles.container}>
        {children}
      </View>
    </Modal>
  );
};

const styles =  StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: Theme.blueLight,
  },
});

export default CustomModal;
