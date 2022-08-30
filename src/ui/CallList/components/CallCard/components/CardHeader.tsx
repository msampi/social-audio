import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SingleLineText } from '../../../../components/SingleLineText';
import { Font, Theme } from '../../../../theme/theme';
import { responsiveWidth } from 'react-native-responsive-dimensions';

interface CardHeaderProps {
  title: string,
  companyName: string,
  callId: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, companyName, callId }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <SingleLineText style={styles.name}>{title}</SingleLineText>
        </View>
        <View style={styles.callIDContainer}>
          <Text style={styles.callID}>ID: {callId}</Text>
        </View>
      </View>
      <Text style={styles.company}>{companyName}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    ...Font.Regular,
    color: Theme.darkGray,
    fontSize: 16,
  },
  company: {
    ...Font.Regular,
    color: Theme.mediumGray,
    fontSize: 12,
  },
  callID: {
    ...Font.Regular,
    color: Theme.mediumGray,
    fontSize: 12,
  },
  callIDContainer: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  nameContainer: {
    width: responsiveWidth(50),
  },


});

export default CardHeader;
