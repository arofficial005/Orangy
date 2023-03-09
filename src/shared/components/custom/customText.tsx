import { COLORS } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import { moderateScale } from '@theme/metrics';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TxT {
  text?: string,
  error?: any,
  textStyle?: any,
  wrapStyle?: any,
  size?: number,
  family?: string,
  color?: string,
  numberOfLines?: number,
  customError?:any;
}

const CustomText = ({
  text,
  error,
  textStyle,
  wrapStyle,
  size,
  family,
  color,
  numberOfLines,
  customError,
}: TxT) => {
  return (
    <View style={[styles.container, wrapStyle]}>
      <Text
        style={[
          {
            color: color ? color : COLORS.black,
            fontSize: size ? moderateScale(size) : moderateScale(14),
            fontFamily: family ? family : FONTS.REGULAR,
          },
          textStyle,
        ]}
        numberOfLines={numberOfLines}>
        {text}
      </Text>
      {error && (
        <Text
          style={[
            textStyle,
            {
              color: 'red',
              fontSize: moderateScale(10),
              fontFamily: FONTS.REGULAR,
            },
          ]}>
          {error}
        </Text>
      )}
      {customError != '' && (
        <Text
          style={[
            textStyle,
            {
              color: 'red',
              // fontSize: size ? RF(size) : RF(15),
              fontSize: moderateScale(10),

              fontFamily: FONTS.REGULAR,
            },
          ]}>
          {customError}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    // fontSize: RF(16),
    // fontFamily: THEME.fonts.medium,
    textTransform: 'uppercase',
  },
});

export default CustomText;
