import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingHorizontal:20,
    paddingTop: 20,
  },
  change: {
    borderRadius: 15,
    width: 160,
    justifyContent:'center',
    alignItems:'center',

  },
  textStyle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight:'700',
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
    borderRadius:15,
    paddingLeft:20,
    alignSelf:'center',
  },
    imgg:{
        
      height:33,
      width:30,
      paddingLeft:20,
    
          },
          txt:{flexDirection:'row',flex:1,fontSize:20,fontWeight:'600',color:COLORS.white},
          txt1:{flexDirection:'row',flex:1,fontSize:12,fontWeight:'400',color:COLORS.black2,marginTop:10},
          view1:{height:38,backgroundColor:COLORS.black1,alignItems:'center',justifyContent:'center',marginTop:25,borderRadius:13,marginBottom:22},
          view2:{flexDirection:'row',flex:0.48,justifyContent:'center'},
});

export default styles;
