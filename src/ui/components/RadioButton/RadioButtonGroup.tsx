import React from 'react';
import { StyleProp, StyleSheet, Text, View } from 'react-native';
import RadioButton from './RadioButton';
import { RadioButtonsType } from '../../../core/domain/Types';
import { Font, Theme } from '../../theme/theme';
import { responsiveHeight } from 'react-native-responsive-dimensions';

interface RadioButtonGroupProps {
  label?: string;
  items: RadioButtonsType[];
  selected: string;
  onSelect: (selectedValues) => void;
  style?: StyleProp<any>;
  secondary?: boolean;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ label, items, selected, onSelect, style, secondary }) => {
  return <View style={[styles(secondary).container, style]}>
    {label && <Text style={styles(secondary).label}>{label}</Text>}
    <View style={styles(secondary).buttonGroup}>
      {items.map((item, index) => <RadioButton
        selected={item.value === selected}
        key={index}
        label={item.label}
        value={item.value}
        onPress={() => onSelect(item.value)}
        secondary={secondary}
      />)}
    </View>
  </View>;
};

const styles = (secondary: boolean | undefined) => StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  label: {
    ...Font.Bold,
    color: secondary ? Theme.accent : 'white',
    marginTop: responsiveHeight(0.9),
    marginBottom: responsiveHeight(2),
  },
  buttonGroup: {
    flexDirection: 'row',
  },
});

export default RadioButtonGroup;
