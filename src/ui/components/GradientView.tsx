import React from 'react';
import { StyleProp, StyleSheet, StyleSheetProperties } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '../theme/theme';

interface GradientProps {
  children: React.ReactNode;
  style?: StyleProp<any>;
}

const GradientView: React.FC<GradientProps> = ({ children, style }) => {
  return (
    <LinearGradient start={{ x: 0.0, y: 0.05 }} end={{ x: 0.20, y: 1.0 }} colors={[Theme.gradientOne, Theme.gradientTwo]} style={[styles.linearGradient, style]} locations={[0,0.6]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default GradientView;
