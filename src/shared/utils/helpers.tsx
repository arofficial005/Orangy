import React from 'react';
import { Alert,LogBox } from 'react-native'
import { BallIndicator, SkypeIndicator } from 'react-native-indicators';
import { ActionSheetCustom } from 'react-native-actionsheet';

export const Indicator = ({
  name,
  color,
  size,
}: {
  name?: string;
  color?: string;
  size?: number;
}) => {
  if (name === 'ball') {
    return <BallIndicator color={color} size={size ? size : 40} />;
  } else {
    return <SkypeIndicator color={color} size={size ? size : 40} />;
  }
};

export const displayAlert = (
  title: string,
  message: string,
  isCancellable: Boolean,
  okAction?: any,
  okayText: string = 'OK',
  cancelText: string = 'Cancel',
) => {
  Alert.alert(
    title,
    message,
    isCancellable
      ? [
        {
          text: cancelText,
          onPress: () => {
            okAction(false);
          },
          style: 'cancel',
        },
        {
          text: okayText,
          onPress: () => {
            okAction(true);
          },
        },
      ]
      : [
        {
          text: 'OK',
          onPress: () => {
            okAction(true);
          },
        },
      ],
  );
};

export const getInitials = (user: { firstName: string, lastName: string }) => {
  const initials = user?.firstName.charAt(0) + user?.lastName.charAt(0);
  return initials?.toUpperCase();
}

export const Options = ({
  init,
  press,
  heading,
  options,
  closeIndex,
  customStyles
}: Partial<{
  init: any;
  heading: string;
  options: any;
  press: any;
  customStyles: any;
  closeIndex: number;
}>) => {
  LogBox.ignoreAllLogs();
  return (
    <ActionSheetCustom
      ref={init}
      title={heading}
      options={options}
      cancelButtonIndex={closeIndex}
      destructiveButtonIndex={closeIndex}
      onPress={press}
      styles={customStyles}
    />
  );
};
