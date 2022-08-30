import React from 'react';
import { StyleProp, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Font, Theme } from '../theme/theme';
import {colors} from "react-native-svg/lib/typescript/lib/extract/extractColor";

interface TouchableTextIconProps {
  icon: string;
  onPress: (() => void) | undefined;
  size?: number;
  color?: string;
  style?: StyleProp<any>;
  text: string;
}

export const TouchableTextIcon: React.FC<TouchableTextIconProps> = ({ style, icon, onPress, size, color, text }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={styles(color).container}>
        <View style={styles(color).content}>
          <Icon name={icon} color={color} size={size} />
        </View>
        <Text style={styles(color).text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = (color: string | undefined) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80
  },
  content: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    ...Font.Regular,
    color: color ? color : Theme.accent,
    fontSize: 12,
    textAlign: 'center',
  },

});

