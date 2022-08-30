import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Font, Theme } from '../../theme/theme';

interface RadioButtonProps {
  label: string;
  value: string | number;
  selected?: boolean;
  onPress: (value) => void;
  secondary?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, selected, onPress, secondary }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(value)} >
      <View style={styles(secondary).container}>
        <Text style={styles(secondary).label}>{label}</Text>
        <View style={styles(secondary).radioContainer}>
          <View style={styles(secondary).radioButton}>
            {selected && <View style={styles(secondary).radioButtonPin} /> }
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = (secondary: boolean | undefined) =>  StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%',
  },
  label: {
    ...Font.Bold,
    fontSize: 16,
    color: secondary ? Theme.accent : 'white',
  },
  radioContainer: {
    // alignItems: 'flex-end',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: secondary ? Theme.accent : 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 10,
  },
  radioButtonPin: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: secondary ? Theme.accent : 'white',
  },

});

export default RadioButton;
