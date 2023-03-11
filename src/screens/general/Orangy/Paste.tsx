import React, {useState} from 'react';
import {View, Text, Pressable, Image, TextInput, FlatList} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';
import styles from './styles';

export const Paste = () => {
    const data = [
      {
        img: require('../../../assets/BottomTabIcons/Video.png'),
        title: 'Peaky Blinders',
        name: 'Netflix',
        views: '19.000.000 views',
      },
    ];
    return (
      <>
        <View style={{flex: 1, marginBottom: '60%'}}>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Image
                style={{
                  height: 18,
                  width: 18,
                  marginLeft: 10,
                  tintColor: '#FFFFFF33',
                }}
                source={require('../../../assets/BottomTabIcons/link.png')}
              />
              <TextInput
                style={[styles.txt, {color: COLORS.white}]}
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
                <View style={{flexDirection: 'row', flex: 0.48}}>
                  <Image style={styles.img} source={item.img} />
                </View>
  
                <View style={{flexDirection: 'row', flex: 0.5}}>
                  <View style={{flexDirection: 'column', marginBottom: '10%'}}>
                    <Text style={styles.txt2}>{item.title}</Text>
                    <Text style={styles.txt1}>{item.views}</Text>
                    <Text style={[styles.txt1, {color: COLORS.white}]}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
          <View style={styles.view4}>
            <Pressable>
              <Text style={{fontSize: 12, fontWeight: '700'}}>
                Download Video
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  };