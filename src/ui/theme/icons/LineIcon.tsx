import React from 'react';
import { StyleProp, View } from 'react-native';
import ChevronLeft from './Lineicons/chevron-left.svg';
import Search from './Lineicons/search-alt.svg';

interface LineIconProps {
  name: string,
  color: string | undefined,
  size?: number,
  style?: StyleProp<any>;
}

const icons = {
  'chevron-left': ChevronLeft,
  search: Search,
};

const LineIcon: React.FC<LineIconProps> = ({ name, color, size, style }) => {
  const Icon = icons[name];
  return (
    <View style={style}>
      <Icon width={size || 28} height={size || 28} fill={color || 'white'} />
    </View>
  );
};

export default LineIcon;
