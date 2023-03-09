import React from 'react';
import { useSelector } from 'react-redux';
import { Host } from 'react-native-portalize';
import BottomTabs from './stacks/mainStack/BottomTabNavigator';
import { StatusBar } from 'react-native';

const Routes = () => {
  const { user } = useSelector((state: any) => state.root.user);

  return (
    <Host>
    <BottomTabs/>
    </Host>
  )
  
};

export default Routes;
