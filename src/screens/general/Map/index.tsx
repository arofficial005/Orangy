import React, { useState } from 'react';
import {View, Text, Pressable, Image, TextInput} from 'react-native';
import { COLORS } from '../../../shared/theme/colors';
import styles from './styles';

const Orangy = ({}) => {
  const [show, setshow] = useState(false);
  
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize:20,color:COLORS.yellow,fontWeight:'600'}}>Orangy</Text>
      <View style={{height:38,backgroundColor:COLORS.black1,alignItems:'center',justifyContent:'center',marginTop:25,elevation:5,borderRadius:13}}>
      <View style={{height: 38, flexDirection: 'row'}}>
        <View
          style={[
            styles.change,
            {backgroundColor: !show ? COLORS.yellow : COLORS.black1},
          ]}>
          <Pressable onPress={() => setshow(false)}>
            <Text
              style={[
                styles.textStyle,
                {color: !show ? COLORS.black : COLORS.white},
              ]}>
              Search on Youtube
            </Text>
          </Pressable>
        </View>
        <View
          style={[
            styles.change,
            {
              backgroundColor: !show ? COLORS.black1 : COLORS.yellow,
            },
          ]}>
          <Pressable onPress={() => setshow(true)}>
            <Text
              style={[
                styles.textStyle,
                {color: !show ? COLORS.white : COLORS.black},
              ]}>
              Paste Link
            </Text>
          </Pressable>
        </View>
      </View>
      </View>
      {show ? <  Paste /> : <Search />}
    </View>
  );
};
const Search = () => {
  return (

    <>
    <View style={styles.view1}>
          <View style={styles.view2}>
            <Image
              style={{height: 22, width: 22, marginLeft: 10,tintColor:"#FFFFFF33"}}
              source={require('../../../assets/BottomTabIcons/explore.png')}
            />
            <TextInput
              style={[styles.txt,{color: COLORS.white}]}
              placeholder="Search a youtube video"
            
              placeholderTextColor={'#FFFFFF33'}
            />
          </View>
        </View>
    </>
  )
}

const Paste = () => {
  return (

    <>
    <Text style={{color:COLORS.white}}>Paste link</Text>
    </>
  )
}
export default Orangy;