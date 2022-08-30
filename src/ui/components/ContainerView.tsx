import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Theme } from '../theme/theme';

interface ContainerViewProps {
  children: React.ReactNode;
  light?: boolean;
}

const ContainerView: React.FC<ContainerViewProps> = ({ children, light }) => {
  return (
    <SafeAreaView style={light ? [styles.container, styles.bgLight] : styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgLight: {
    backgroundColor: Theme.blueLight,
  },

});

export default ContainerView;
