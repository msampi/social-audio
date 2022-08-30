import React from 'react';
import { StyleProp, StyleSheet, Text, TextInput, View } from 'react-native';
import { Font, Theme } from '../theme/theme';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import TextInputMask from 'react-native-text-input-mask';

interface CustomMaskInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  mask: 'date' | 'time';
  style?: StyleProp<any>;
}

const CustomMaskInput: React.FC<CustomMaskInputProps> = ({ value, onChange, label, mask, style }) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInputMask
        onChangeText={onChange}
        value={value}
        placeholder={mask === 'date' ? 'YYYY/MM/DD' : 'HH:MM'}
        placeholderTextColor={'white'}
        mask={mask === 'date' ? '[0000]-[00]-[0000]' : '[00]:[00]'}
        style={styles.input}
      />
    </View>
  );
};

const styles =  StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  input: {
    ...Font.Regular,
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Theme.accentLight,
    width: '100%',
    color: 'white',
  },
  label: {
    ...Font.Bold,
    color: 'white',
    marginVertical: responsiveHeight(0.2),
  },
});

export default CustomMaskInput;
