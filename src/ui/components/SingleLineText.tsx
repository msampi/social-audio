import React from 'react';
import { Text, TextProps } from 'react-native';

export const SingleLineText: React.FC<TextProps> = (props) => {
  const textProps: TextProps = {
    ellipsizeMode: 'tail',
    allowFontScaling: false,
    ...props,
    style: [{ flexShrink: 1 }, props.style],
    numberOfLines: 1,
  };
  return <Text {...textProps}>{props.children}</Text>;
};
