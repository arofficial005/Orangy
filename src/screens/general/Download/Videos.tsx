import React, {useState} from 'react';
import {View, Text, Pressable, FlatList, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';
import styles from './styles';

export const Videos = () => {
    const data = [
      {
        img: require('../../../assets/BottomTabIcons/Video.png'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
      {
        img: require('../../../assets/BottomTabIcons/Video.png'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
      {
        img: require('../../../assets/BottomTabIcons/Video.png'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
      {
        img: require('../../../assets/BottomTabIcons/Video.png'),
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
            <TouchableOpacity>
            <View style={[styles.list]}>
              <View style={{flexDirection: 'row', flex: 0.48}}>
                <Image style={styles.img} source={item.img} />
              </View>
  
              <View style={{flexDirection: 'row', flex: 0.5}}>
                <View style={{flexDirection: 'column', marginBottom: '21%'}}>
                  <Text style={styles.txt}>{item.title}</Text>
                  <Text style={styles.txt1}>{item.name}</Text>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          )}
        />
      </>
    );
  };

  