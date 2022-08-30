import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Font, Theme } from '../theme/theme';

interface CustomSmallButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<any>;
  accent?: boolean;
}

const CustomSmallButton: React.FC<CustomSmallButtonProps> = ({ label, onPress, style, accent }) => {
  return (
    <TouchableOpacity
      style={[styles(accent).button, style]}
      onPress={onPress}
    ><Text style={styles(accent).buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = (accent: boolean | undefined) => StyleSheet.create({
  button: {
    backgroundColor: accent ? Theme.accent : 'white',
    padding: 5,
    borderRadius: 8,
  },
  buttonText: {
    ...Font.Bold,
    color: accent ? 'white' : Theme.accent,
    textAlign: 'center',
  },
});

export default CustomSmallButton;
