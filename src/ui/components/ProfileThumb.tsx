import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { Font, Theme } from '../theme/theme';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface ProfileThumbProps {
  source: ImageSourcePropType;
  name: string;
  borderColor?: string;
}

const ProfileThumb: React.FC<ProfileThumbProps> = ({ source, name, borderColor }) => {
  return (
    <>
      <View style={styles(borderColor).container}>
        <Image style={styles(borderColor).profileImage} source={source!} />
        <Text style={styles(borderColor).speakerName}>{name}</Text>
      </View>
    </>
  );
};

const styles = (borderColor: string | undefined) => StyleSheet.create({
  container: {
    width: responsiveWidth(16),
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: responsiveWidth(2),
    borderColor: borderColor ? borderColor : 'transparent',
    borderWidth: 3,
    margin: 1,
  },
  speakerName: {
    ...Font.Regular,
    color: Theme.mediumGray,
    fontSize: 12,
    marginTop: responsiveHeight(1),
    textAlign: 'center',
  },

});

export default ProfileThumb;
