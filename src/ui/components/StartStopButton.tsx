import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Font, Theme } from '../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface StartStopButtonProps {
  onPress: () => void;
  style?: StyleProp<any>;
  type: 'start' | 'finish' | 'pause';
}

const StartStopButton: React.FC<StartStopButtonProps> = ({ onPress, style, type }) => {
  const getButtonColor = () => {
    switch (type) {
      case 'start': return styles.start;
      case 'pause': return styles.pause;
      case 'finish': return styles.stop;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonColor(), style]}
      onPress={onPress}
    >
      {/*<Icon name={ 'play' } color={'white'} size={20} />*/}
      {type === 'start' && <Text style={styles.buttonText}>{'START CALL'}</Text>}
      {type === 'pause' && <Text style={styles.buttonText}>{'STOP SPEAKER'}</Text>}
      {type === 'finish' && <Text style={styles.buttonText}>{'FINISH CALL'}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    margin: 2,
  },
  start: {
    backgroundColor: Theme.success,
  },
  stop: {
    backgroundColor: Theme.error,
  },
  pause: {
    backgroundColor: Theme.accentMedium,
  },
  buttonText: {
    ...Font.Bold,
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});

export default StartStopButton;
