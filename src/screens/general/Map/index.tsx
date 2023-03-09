import React, {} from 'react';
import {View, Text} from 'react-native';
import { COLORS } from '../../../shared/theme/colors';
import styles from './styles';

const Orangy = ({}) => {
  
  return (
    <View style={styles.mainContainer}>
      <Text style={{color:COLORS.black}}>Orangy Screen</Text>
    </View>
  );
};

export default Orangy;