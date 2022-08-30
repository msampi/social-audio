import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Font, Theme } from '../theme/theme';

interface CustomTextInputProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<any>;
  accent?: boolean;
  secondary?: boolean;
  loading?: boolean;
}

const CustomButton: React.FC<CustomTextInputProps> = ({ label, onPress, style, accent, secondary, loading }) => {
  return (
    <TouchableOpacity
      style={[styles(accent, secondary).button, style]}
      onPress={onPress}
      disabled={loading}
    >
      {loading && <ActivityIndicator color={accent || secondary ? 'white' : Theme.accent} />}
      {!loading && <Text style={styles(accent, secondary).buttonText}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = (accent: boolean | undefined, accentLight: boolean | undefined) => StyleSheet.create({
  button: {
    backgroundColor: accent ? Theme.accent : accentLight ? Theme.mediumGray : 'white',
    padding: 10,
    borderRadius: 18,
  },
  buttonText: {
    ...Font.Bold,
    color: accent || accentLight ? 'white' : Theme.accent,
    textAlign: 'center',
  },
});

export default CustomButton;
