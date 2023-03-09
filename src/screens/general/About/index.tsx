import React, {} from 'react';
import {View, Text} from 'react-native';
import { COLORS } from '../../../shared/theme/colors';
import styles from './styles';

const Favourite = ({}) => {
  
  return (
    <View style={styles.mainContainer}>
    <Text style={{fontSize:20,color:COLORS.white,fontWeight:'600'}}>Favorites</Text>

  </View>
  );
};

export default Favourite;
