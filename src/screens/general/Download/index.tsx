import React, {useState} from 'react';
import {View, Text, Pressable, FlatList, Image} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';
import { Songs } from './Songs';
import styles from './styles';
import { Videos } from './Videos';

const Download = ({}) => {
  const [show, setshow] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 20, color: COLORS.white, fontWeight: '600'}}>
        Downloads
      </Text>
      <View style={styles.view1}>
        <View style={{height: '100%', width: '100%', flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
          <View
            style={[
              styles.change,
              {backgroundColor:! show ? COLORS.yellow:COLORS.black1 },
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


export default Download;
