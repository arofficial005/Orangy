import { Platform, StyleSheet } from 'react-native';
import { moderateScale } from '@theme/metrics';
import { COLORS } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const styles = StyleSheet.create({
  tabbarContainer: {
    flexDirection: 'row',
    backgroundColor:COLORS.black,
    paddingTop:moderateScale(10),
    height:moderateScale(90),
    position:'relative',
    paddingHorizontal:moderateScale(13)
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    height: moderateScale(50),
    paddingTop: moderateScale(5),
    justifyContent:'space-evenly',
    
  },
  tabItemText: {
    color:COLORS.black,
    fontSize: moderateScale(11),
    fontWeight:'400',
    lineHeight:moderateScale(18),

    // paddingTop: moderateScale(4),
  },
  dropShadow:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

  },
  tabBarIconImage:{height:moderateScale(34), width:moderateScale(34), }
});
export default styles;