import React, { useState } from 'react';
import {View, Text, Pressable, Image, TextInput, FlatList} from 'react-native';
import { COLORS } from '../../../shared/theme/colors';
import styles from './styles';

const Orangy = ({}) => {
  const [show, setshow] = useState(false);
  
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize:20,color:COLORS.yellow,fontWeight:'600'}}>Orangy</Text>
      <View style={{height:38,backgroundColor:COLORS.black1,alignItems:'center',justifyContent:'center',marginTop:25,borderRadius:13}}>
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
  const data=[
    {
        img:require('../../../assets/BottomTabIcons/Video.png'),
        title:"Peaky Blinders",
        name:"Netflix",
        views:'19.000.000 views',
    },     {
      img:require('../../../assets/BottomTabIcons/Video.png'),
      title:"Peaky Blinders",
      name:"Netflix",
      views:'19.000.000 views',
  },    {
    img:require('../../../assets/BottomTabIcons/Video.png'),
    title:"Peaky Blinders",
    name:"Netflix",
    views:'19.000.000 views',
},    {
  img:require('../../../assets/BottomTabIcons/Video.png'),
  title:"Peaky Blinders",
  name:"Netflix",
  views:'19.000.000 views',
}, 
]
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
        <FlatList
        showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
        <View style={[styles.list]}>
       <View  style={{flexDirection:'row',flex:0.48}}><Image   style={styles.img} source={item.img}/></View> 
     
       <View style={{flexDirection:'row',flex:0.5}}>
        <View style={{flexDirection:'column',marginBottom:"10%"}}>
        <Text style={styles.txt2}>{item.title}</Text>
        <Text  style={styles.txt1}>{item.views}</Text>
        <Text  style={[styles.txt1,{color:COLORS.white}]}>{item.name}</Text>
        
        </View>
        </View>

       </View>
         )}
         />

    </>
  )
}

const Paste = () => {
  const data=[
    {
        img:require('../../../assets/BottomTabIcons/Video.png'),
        title:"Peaky Blinders",
        name:"Netflix",
        views:'19.000.000 views',
    },
]
  return (

    <>
    <View style={{flex:1,marginBottom:"60%"}}>
    <View style={styles.view1}>
          <View style={styles.view2}>
            <Image
              style={{height: 18, width: 18, marginLeft: 10,tintColor:"#FFFFFF33"}}
              source={require('../../../assets/BottomTabIcons/link.png')}
            />
            <TextInput
              style={[styles.txt,{color: COLORS.white}]}
              placeholder="Search a youtube video"
            
              placeholderTextColor={'#FFFFFF33'}
            />
          </View>
        </View>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
        <View style={[styles.list]}>
       <View  style={{flexDirection:'row',flex:0.48}}><Image   style={styles.img} source={item.img}/></View> 
     
       <View style={{flexDirection:'row',flex:0.5}}>
        <View style={{flexDirection:'column',marginBottom:"10%"}}>
        <Text style={styles.txt2}>{item.title}</Text>
        <Text  style={styles.txt1}>{item.views}</Text>
        <Text  style={[styles.txt1,{color:COLORS.white}]}>{item.name}</Text>
        
        </View>
        </View>

       </View>
       
         )}
         />
         <View style={{backgroundColor:COLORS.yellow,width:128,height:26,alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:5}}>
            <Pressable>
              <Text style={{fontSize:12,fontWeight:'700'}}>Download Video</Text>
            </Pressable>
         </View>
         </View>
    </>
  )
}
export default Orangy;