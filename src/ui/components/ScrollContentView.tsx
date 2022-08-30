import React from 'react';
import {SafeAreaView, StyleProp, StyleSheet} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ScrollView } from 'react-native-gesture-handler';

interface ScrollContainerViewProps {
  children: React.ReactNode,
  contentCenter?: boolean,
  style?: StyleProp<any>;
}

const ScrollContentView: React.FC<ScrollContainerViewProps> = ({ children, contentCenter, style }) => {
  return (
    <ScrollView style={style}>
      <SafeAreaView style={styles(contentCenter).content}>
        {children}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = (contentCenter: boolean | undefined) => StyleSheet.create({
  content: {
    flex: 1,
    alignItems: contentCenter ? 'center' : 'flex-start',
    justifyContent: contentCenter ? 'center' : 'flex-start',
    marginHorizontal: responsiveWidth(5),
  },
});

export default ScrollContentView;
