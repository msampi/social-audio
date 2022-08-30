import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Font, Theme } from '../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface BotomModalOptionProps {
  modalRef: Record<string, any>;
  icon: string;
  onPress: () => void;
  label: string;
}

const BottomModalOption: React.FC<BotomModalOptionProps> = ({ icon, onPress, label, modalRef }) => {

  const executeOnPress = () => {
    modalRef.current.close();
    onPress();
  };

  return (
    <TouchableOpacity style={styles.optionContainer} activeOpacity={0.7} onPress={executeOnPress}>
      <Icon name={icon} color={Theme.accent} size={20} />
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  optionText: {
    ...Font.Regular,
    color: Theme.accent,
    fontSize: 16,
    marginLeft: 6,
  },
});

export default BottomModalOption;
