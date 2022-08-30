import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, Theme } from '../theme/theme';
import { TouchableIcon } from './TouchableIcon';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  back?: boolean;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ back, title  }) => {
  const navigation = useNavigation();

  const goBack = () => { navigation.goBack(); };

  return (
    <View style={styles.container}>
      {back && <TouchableIcon icon={'chevron-left'} onPress={goBack} size={40} color={'white'} />}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...Font.Bold,
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Header;
