import {StyleSheet} from 'react-native';
import {moderateScale} from '@theme/metrics';
import {COLORS} from '@theme/colors';
import {FONTS} from '@theme/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingHorizontal:20,
    paddingTop: 20,
  },
  change: {
    borderRadius: 15,
    width: 158,
    justifyContent:'center',
    alignItems:'center',
  },
  textStyle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight:'700',
    textAlign: 'center',
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.black,
    borderRadius: 20,
    
  },
  
  txt: {color: COLORS.white, fontSize: 17,alignItems:'center',justifyContent:'center',alignSelf:'center'},
  view1: {width: "100%", borderRadius: 21, height: 38, marginTop: 27},
});

export default styles;
