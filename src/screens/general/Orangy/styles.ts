import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';
// import {FONTS} from '@theme/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingHorizontal:20,
    paddingTop: 20,
  },
  change: {
    borderRadius: 15,
    width: 150,
    justifyContent:'center',
    alignItems:'center',
    height:26,
  },
  textStyle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight:'700',
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.black,
    borderRadius: 20,
    
  },
  
  txt: {color: COLORS.white, fontSize: 15,alignItems:'center',marginLeft:10,justifyContent:'center',alignSelf:'center',},
  view1: {width: "100%", borderRadius: 21, height: 38, marginTop: 27,marginBottom:18},
  txt3:{fontSize:20,color:COLORS.yellow,fontWeight:'600'},
  view3:{height:38,backgroundColor:COLORS.black1,alignItems:'center',justifyContent:'center',marginTop:25,borderRadius:13},
  view4:{backgroundColor:COLORS.yellow,width:128,height:26,alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:5},
  list:{
    flexDirection:'row',
    alignItems:'center',
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
});

export default styles;
