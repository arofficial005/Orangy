import React, {useState} from 'react';
import {View, Text, Pressable, FlatList, Image} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';
import styles from './styles';

const Download = ({}) => {
  const [show, setshow] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 20, color: COLORS.white, fontWeight: '600'}}>
        Downloads
      </Text>
      <View style={styles.view1}>
        <View style={{height: '100%', width: '100%', flexDirection: 'row'}}>
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
                Videos
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
                Songs
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      {show ? <Songs /> : <Videos />}
    </View>
  );
};
const Videos = () => {
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
        )}
      />
    </>
  );
};

const Songs = () => {
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
export default Download;
