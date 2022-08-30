import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface ContainerViewProps {
  children: React.ReactNode,
  contentCenter?: boolean,
}

const ContentView: React.FC<ContainerViewProps> = ({ children, contentCenter }) => {
  return (
    <SafeAreaView style={styles(contentCenter).content}>
      {children}
    </SafeAreaView>
  );
};

const styles = (contentCenter: boolean | undefined) => StyleSheet.create({
  content: {
    flex: 1,
    alignItems: contentCenter ? 'center' : 'flex-start',
    justifyContent: contentCenter ? 'center' : 'flex-start',
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(2),
  },
});

export default ContentView;
