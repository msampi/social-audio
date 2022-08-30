import React from 'react';
import { StyleProp, StyleSheet, Text, TextInput, View } from 'react-native';
import { Font, Theme } from '../theme/theme';
import { responsiveHeight } from 'react-native-responsive-dimensions';

interface CustomTextInputProps {
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  password?: boolean;
  style?: StyleProp<any>;
  label?: string;
  error?: string;
  secondary?: boolean;
  autocapitalize?: boolean;
  bottomLabel?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ value, onChange, placeholder, password, style, label, error, secondary, autocapitalize, bottomLabel }) => {
  return (
    <View style={styles(error, secondary).container}>
      {label && <Text style={styles(error, secondary).label}>{label}</Text>}
      <TextInput
        style={[styles(error, secondary).input, style]}
        onChangeText={onChange}
        textContentType={password ? 'password' : 'none'}
        value={value!}
        placeholder={placeholder}
        placeholderTextColor={secondary ? Theme.accent : 'white'}
        secureTextEntry={password}
        autoCapitalize={autocapitalize ? 'words' : 'none'}
      />
      {bottomLabel && <Text style={styles(error, secondary).bottomLabel}>{bottomLabel}</Text>}
      <View style={styles(error, secondary).errorContainer}>
        <Text style={styles(error, secondary).error}>{error}</Text>
      </View>
    </View>
  );
};

const styles = (error: string | undefined, secondary: boolean | undefined) => StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    ...Font.Regular,
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: secondary ? Theme.blueLight : Theme.accentLight,
    borderWidth: secondary ? 1 : 0,
    borderColor: Theme.accent,
    width: '100%',
    color: secondary ? Theme.accent : 'white',
  },
  label: {
    ...Font.Bold,
    color: error ? Theme.error : secondary ? Theme.accent : 'white',
    marginVertical: responsiveHeight(0.2),
  },
  error: {
    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(1),
    color: Theme.error,
    fontSize: 12,
  },
  errorContainer: {
    width: '100%',
  },
  bottomLabel: {
    marginTop: 2,
    color: secondary ? Theme.accent : 'white',
    fontSize: 10,
  },
});

export default CustomTextInput;
