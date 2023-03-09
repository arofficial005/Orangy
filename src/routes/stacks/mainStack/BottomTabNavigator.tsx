import React, { useEffect } from 'react';
import { StatusBar, TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomText from '@components/custom/customText';
import styles from './styles';
import MileStones from '@screens/general/MileStones';
import { COLORS } from '@theme/colors';
import Rewards from '@screens/general/Rewards';
import Map from '@screens/general/Map';
import Vanues from '@screens/general/Venues';
import About from '@screens/general/About';
import { navigate } from '@services/nav.service';

const Tab = createBottomTabNavigator();

type RenderTabIconProps = {
  routeName: string;
  isFocused: boolean;
};

function RenderTabIcon({ routeName, isFocused }: RenderTabIconProps) {
  switch (routeName) {
    case 'STATS':
      return (
        isFocused ?
          <Image
            style={styles.tabBarIconImage}
            resizeMode="contain"
            tintColor={COLORS.yellow}
            source={require('@assets/BottomTabIcons/Downloads.png')}
          /> :
          <Image
            style={styles.tabBarIconImage}
            resizeMode="contain"
            source={require('@assets/BottomTabIcons/Downloads.png')}
          />
      );
    case 'MAP':
      return (
        isFocused ?
          <Image
            style={styles.tabBarIconImage}
            resizeMode="contain"
            tintColor={COLORS.yellow}
            source={require('@assets/BottomTabIcons/Orangy.png')}
          /> :
          <Image
            style={styles.tabBarIconImage}
            resizeMode="contain"
            source={require('@assets/BottomTabIcons/Orangy.png')}
          />

      );

    case 'ABOUT':
      return (
        isFocused ?
          <Image
            style={[styles.tabBarIconImage]}
            resizeMode="contain"
            tintColor={COLORS.yellow}
            source={require('@assets/BottomTabIcons/Favourite.png')}
          /> :
          <Image
            style={styles.tabBarIconImage}
            resizeMode="contain"

            source={require('@assets/BottomTabIcons/Favourite.png')}
          />

      );
    default:
      return <></>;
  }
}

type CustomTabbarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

function CustomTabbar({ state, descriptors, navigation }: CustomTabbarProps) {
  const insets = useSafeAreaInsets();
  return (

    <View style={{ backgroundColor: '#26272A' }}>

      <View style={[styles.tabbarContainer, { paddingBottom: insets.bottom }]}>
        {state.routes.map(
          (route: { key: string | number; name: any }, index: any) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                key={route.name}
                style={[styles.tabItemContainer]}>
                <>
                  <RenderTabIcon routeName={route.name} isFocused={isFocused} />
                  <CustomText
                    text={route.name}
                    textStyle={[styles.tabItemText]}
                  />
                </>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    </View>
  );
}
import { createStackNavigator } from '@react-navigation/stack';


import { ROUTES } from '@utils/routes';
const Stack = createStackNavigator();


const MilestoneStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.MILESTONECREEN} component={MileStones} />
    </Stack.Navigator>
  );
};

const MapStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.MAPSCREEN} component={Map} />
    </Stack.Navigator>
  );
};

const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.ABOUTSCREEN} component={About} />
    </Stack.Navigator>
  );
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      
      tabBar={props => <CustomTabbar {...props} />}
      screenOptions={{
        headerShown: false,
        unmountOnBlur:true
      }}>
      <Tab.Screen name={ROUTES.MILESTONES} component={MilestoneStack} />
      <Tab.Screen name={ROUTES.MAP} component={MapStack} />
      <Tab.Screen name={ROUTES.ABOUT} component={AboutStack} />

    </Tab.Navigator>
  );
}
