import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Font, Theme } from '../theme/theme';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomModal from './CustomModal';
import ProfileThumb from './ProfileThumb';

interface ThumbMoreProps {
  count: number,
}

const ThumbMore: React.FC<ThumbMoreProps> = ({ count }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  return (
    <>
      <CustomModal visible={visibleModal} toggle={() => {}}>
        <View style={styles.modalContainer}>
          <ProfileThumb source={{ uri: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg' }} name={'John Doe'} />
        </View>
        <Button title={'CLOSE'} onPress={() => setVisibleModal(false)} />
      </CustomModal>
      <TouchableOpacity style={styles.container} onPress={() => setVisibleModal(true)}>
        <View style={styles.circle}>
          <Text style={styles.label}>+{count}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(16),
  },
  label: {
    ...Font.Bold,
    color: Theme.accent,
    fontSize: 15,
    textAlign: 'center',
  },
  circle: {
    backgroundColor: Theme.lightGray,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Theme.lightGray,
    marginHorizontal: responsiveWidth(2),
    justifyContent: 'center',
  },
  textMore: {
    ...Font.Regular,
    color: Theme.mediumGray,
    fontSize: 12,
    textAlign: 'center',
    marginTop: responsiveHeight(1),
  },
  modalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: responsiveHeight(3),
    justifyContent: 'center',
  },


});

export default ThumbMore;
