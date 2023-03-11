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
  list:{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    paddingVertical:7,
    paddingBottom:20,
    borderRadius:8,
  
     borderBottomColor: '#C4C4C4'
     
  },    img:{
        
    height:92,
    width:133,
    backgroundColor:'#092857',
    borderRadius:15,
    paddingLeft:20,
    alignSelf:'center',
    
          },
          txt2:{flexDirection:'row',flex:1,fontSize:20,fontWeight:'600',color:COLORS.white},
          txt1:{flexDirection:'row',flex:1,fontSize:12,fontWeight:'400',color:COLORS.black2,marginTop:10},
          txt3:{fontSize:20,color:COLORS.white,fontWeight:'600',marginBottom:28},
});

export default styles;
