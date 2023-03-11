import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';
import styles from './styles';

const Favourite = ({}) => {
  const data = [
    {
      img: require('../../../assets/BottomTabIcons/Video.png'),
      title: 'Peaky Blinders',
      name: 'Netflix',
      views: '19.000.000 views',
    },
    {
      img: require('../../../assets/BottomTabIcons/Video.png'),
      title: 'Peaky Blinders',
      name: 'Netflix',
      views: '19.000.000 views',
    },
    {
      img: require('../../../assets/BottomTabIcons/Video.png'),
      title: 'Peaky Blinders',
      name: 'Netflix',
      views: '19.000.000 views',
    },
    {
      img: require('../../../assets/BottomTabIcons/Video.png'),
      title: 'Peaky Blinders',
      name: 'Netflix',
      views: '19.000.000 views',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.txt3}>Favorites</Text>
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
    </View>
  );
};

export default Favourite;
