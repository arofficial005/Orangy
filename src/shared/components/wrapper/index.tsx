import { COLORS } from '@theme/colors';
import { GST } from '@theme/globalStyles';
import React, { ReactChild } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface WrapperProps {
  children?: any;
  top?: boolean;
  bottom?: boolean;
  style?:any;
}

const Wrapper = ({ children, top, bottom,style }: WrapperProps) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={[
          styles.container,
          style,
          top ?
            {
              paddingTop: insets.top,
            } : null,
          bottom ?
            {
              paddingBottom: insets.bottom,
            } : null,


        ]}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Wrapper;
