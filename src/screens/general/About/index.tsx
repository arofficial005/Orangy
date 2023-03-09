import React, {} from 'react';
import {View, Text} from 'react-native';
import { COLORS } from '../../../shared/theme/colors';
import styles from './styles';

const Favourite = ({}) => {
  
  return (
    <View style={styles.mainContainer}>
      <Text style={{color:COLORS.black}}>Favourite Screen</Text>
    </View>
  );
};

export default Favourite;
