import React, {useState} from 'react';
import {View, Text, Pressable, FlatList, Image} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';
import styles from './styles';
export const Songs = () => {
    const data = [
      {
        img: require('../../../assets/BottomTabIcons/Song.png'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
      {
        img: require('../../../assets/BottomTabIcons/Song.png'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
      {
        img: require('../../../assets/BottomTabIcons/Song.png'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
      {
        img: require('../../../assets/BottomTabIcons/Song.png'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
    ];
    return (
      <>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <View style={[styles.list]}>
              <View style={styles.view2}>
                <Image style={styles.imgg} source={item.img} />
              </View>
  
              <View style={{flexDirection: 'row', flex: 0.5}}>
                <View style={{flexDirection: 'column', marginBottom: '8%'}}>
                  <Text style={styles.txt}>{item.title}</Text>
                  <Text style={styles.txt1}>{item.name}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </>
    );
  };