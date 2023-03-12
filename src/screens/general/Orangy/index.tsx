import React, {useState} from 'react';
import {View, Text, Pressable, Image, TextInput, FlatList} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';
import { Paste } from './Paste';
import { Search } from './Search';
import styles from './styles';

const Orangy = ({}) => {
  const [show, setshow] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.txt3}>Orangy</Text>
      <View style={styles.view3}>
        <View style={{height: 38, flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
          <View
            style={[
              styles.change,
              {backgroundColor: !show ? COLORS.yellow : '#24252d'},
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
                backgroundColor: !show ? '#24252d' : COLORS.yellow,
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
      {show ? <Paste /> : <Search />}
    </View>
  );
};



export default Orangy;
