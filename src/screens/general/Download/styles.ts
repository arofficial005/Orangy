import {StyleSheet} from 'react-native';
import {COLORS} from '@theme/colors';

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
});

export default styles;
