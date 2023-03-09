import { Dimensions, PixelRatio } from 'react-native';
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 375; // change this based upon the designs given
const guidelineBaseHeight = 812; // change this based upon the designs given

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scaleSize(size) - size) * factor;

export const ms = moderateScale;

export const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;

export const vs = verticalScale;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export const s = scaleFont;

export const defaultDimensions = {
  screenWidth: WINDOW_WIDTH,
  screenHeight: WINDOW_HEIGHT,
  smallPadding: moderateScale(10),
  basePadding: moderateScale(20),
  smallMargin: moderateScale(10),
  baseMargin: moderateScale(20),
  buttonHeight: moderateScale(48),
};
