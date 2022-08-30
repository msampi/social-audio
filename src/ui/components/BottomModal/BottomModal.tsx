import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { responsiveHeight } from 'react-native-responsive-dimensions';

interface BotomModalProps {
  modalRef: any;
  children: React.ReactNode;
  top?: number;
  onClose?: () => void;
}

const BottomModal: React.FC<BotomModalProps> = ({ modalRef, children, top, onClose }) => {
  return (
    <Modalize
      ref={modalRef}
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
      modalStyle={styles(top).modalContainer}
      onClose={onClose}
      adjustToContentHeight={false}>
      <View style={styles(top).modalContent}>
        {children}
      </View>
    </Modalize>
  );
};

const styles = (top: number | undefined) => StyleSheet.create({
  modalContainer: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: top ? responsiveHeight(top) : responsiveHeight(10),
  },
  modalContent: {
    flex: 1,
    paddingTop: 10,
    marginBottom: responsiveHeight(10),
  },
});

export default BottomModal;
