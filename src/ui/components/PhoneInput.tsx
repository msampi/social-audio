import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, Theme } from '../theme/theme';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import PhoneInput from 'react-native-phone-number-input';

interface PhoneInputProps {
  value: string;
  code: any;
  onChangeValue: (value: string) => void;
  onChangeCountry: (country: any) => void;
  error?: string;
  secondary?: boolean;
}

const CustomTextInput: React.FC<PhoneInputProps> = ({ value, onChangeValue, onChangeCountry, error, secondary, code }) => {
  return (
    <>
      <Text style={styles(error, secondary).label}>Mobile phone</Text>
      <PhoneInput
        defaultValue={value}
        defaultCode={code !== 'undefined' ? code : 'US'}
        onChangeText={onChangeValue}
        onChangeCountry={onChangeCountry}
        placeholder="Enter your mobile phone"
        textContainerStyle={styles(error, secondary).inputStyle}
        flagButtonStyle={styles(error, secondary).codeStyle}
        containerStyle={styles(error, secondary).containerStyle}
        textInputStyle={styles(error, secondary).textInputStyle}
        codeTextStyle={styles(error, secondary).codeTextStyle}
        textInputProps={{
          placeholderTextColor: 'white',
        }}
      />

      <View>
        <Text style={styles(error, secondary).error}>{error}</Text>
      </View>
    </>

  );
};

const styles = (error: string | undefined, secondary: boolean | undefined) => StyleSheet.create({
  label: {
    ...Font.Bold,
    color: error ? Theme.error : secondary ? Theme.accent : 'white',
    marginVertical: responsiveHeight(0.3),
  },
  error: {
    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(0.5),
    color: Theme.error,
    textAlign: 'left',
  },
  inputStyle: {
    backgroundColor: secondary ? 'white' : Theme.accentLight,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: secondary ? Theme.accent : Theme.accentLight,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  codeStyle: {
    backgroundColor: Theme.accentMedium,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 1,
    borderColor: Theme.accentMedium,
  },
  containerStyle: {
    height: 41,
    paddingTop: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  textInputStyle: {
    color: secondary ? Theme.accent : 'white',
    height: 40,
    ...Font.Regular,
    fontSize: 14,
  },
  codeTextStyle: {
    color: secondary ? Theme.accent : 'white',
    height: 22,
    ...Font.Regular,
    fontSize: 16,
  },

});

export default CustomTextInput;
