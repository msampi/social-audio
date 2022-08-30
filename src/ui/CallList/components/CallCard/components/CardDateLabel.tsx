import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Call } from '../../../../../core/domain/Call';
import { DateFormatter } from '../../../../utils/DateFormatter';
import { Font, Theme } from '../../../../theme/theme';

interface CardDateLabelProps {
  call: Call;
}

const CardDateLabel: React.FC<CardDateLabelProps> = ({ call }) => {
  return (
    <>
      {DateFormatter.isToday(new Date(call.date)) ? <View style={styles.todayContainer}>
        <Text style={styles.todayText}>{DateFormatter.toTextDate(new Date(call.date))}</Text>
      </View> : <View style={styles.recordedContainer}>
        <Text style={styles.recordedText}>{DateFormatter.toTextDate(new Date(call.date))}</Text>
      </View>}
    </>
  );
};

const styles = StyleSheet.create({
  todayContainer: {
    backgroundColor: '#33871c',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 3,
  },
  todayText: {
    ...Font.Bold,
    color: 'white',
    fontSize: 11,
  },
  recordedContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 3,
  },
  recordedText: {
    ...Font.Bold,
    color: Theme.accentLight,
    fontSize: 11,
  },
});

export default CardDateLabel;
