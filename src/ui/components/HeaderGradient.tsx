import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, Theme } from '../theme/theme';
import { TouchableIcon } from './TouchableIcon';
import { useNavigation } from '@react-navigation/native';
import GradientView from './GradientView';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface HeaderProps {
  title: string;
  back?: boolean;
  rightIcon?: string | null;
  onPressRightIcon?: () => void;
  onPressHandRight?: () => void;
  handRight?: boolean | null;
}

const HeaderGradient: React.FC<HeaderProps> = ({ title, back, rightIcon, onPressRightIcon, handRight, onPressHandRight }) => {
  const navigation = useNavigation();

  const goBack = () => { navigation.goBack(); };

  return (
    <View style={styles.container}>
      <GradientView>
        <View style={styles.content}>
          {back && <TouchableIcon icon={'chevron-left'} onPress={goBack} color={'white'} size={30} />}
          <Text style={styles.title}>{title}</Text>
          {handRight && <TouchableIcon icon={'hand-right'} onPress={onPressHandRight} color={'white'} size={20} />}
          {rightIcon && <TouchableIcon icon={rightIcon} onPress={onPressRightIcon} color={'white'} size={20} />}
        </View>
      </GradientView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1),
    height: responsiveHeight(6),
  },
  title: {
    ...Font.Regular,
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
    flexGrow: 1,
  },


});

export default HeaderGradient;
