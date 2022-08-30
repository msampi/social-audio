import React, { Dispatch, SetStateAction } from 'react';
import { StyleProp, StyleSheet, TextInput, View } from 'react-native';
import { Font, Theme } from '../theme/theme';
import LineIcon from '../theme/icons/LineIcon';
import { responsiveHeight } from 'react-native-responsive-dimensions';

interface SearchBarProps {
  style?: StyleProp<any>;
  value: string;
  onChange: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({ style, value, onChange }) => {
  return (
    <View style={[styles.container, style]}>
      <LineIcon name={'search'} color={Theme.mediumGray} size={18} />
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={'Search by company name or call ID'}
        placeholderTextColor={Theme.mediumGray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.lightGray,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
  },
  input: {
    ...Font.Regular,
    color: Theme.darkGray,
    marginLeft: 9,
  },


});

export default SearchBar;
