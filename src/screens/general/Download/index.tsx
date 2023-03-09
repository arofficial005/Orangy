import React, {} from 'react';
import {View, Text} from 'react-native';
import { COLORS } from '../../../shared/theme/colors';
import styles from './styles';

const Download = ({}) => {
  
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize:20,color:COLORS.white}}>Downloads</Text>
    </View>
  );
};

export default Download;