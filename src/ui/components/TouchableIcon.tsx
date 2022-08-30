import React from 'react';
import { StyleProp, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TouchableIconProps {
  icon: string;
  onPress: (() => void) | undefined;
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}

export const TouchableIcon: React.FC<TouchableIconProps> = ({ style, icon, onPress, size, color }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={styles.container}>
        <Icon name={icon} color={color} size={size} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

