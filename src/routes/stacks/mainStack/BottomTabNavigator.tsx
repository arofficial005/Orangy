import React, { useEffect } from 'react';
import { StatusBar, TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomText from '@components/custom/customText';
import styles from './styles';
import { COLORS } from '@theme/colors';
import { ROUTES } from '@utils/routes';
import Download from '../../../screens/general/Download';
import Orangy from '../../../screens/general/Orangy';
import Favourite from '../../../screens/general/Favourite';
import Svg, { Path } from "react-native-svg"
const Tab = createBottomTabNavigator();

type RenderTabIconProps = {
  routeName: string;
  isFocused: boolean;
};

function RenderTabIcon({ routeName, isFocused }: RenderTabIconProps,props:any)  {
  switch (routeName) {
    case 'Download':
      return (
 isFocused ?
        <Svg
        style={styles.tabBarIconImage}
        xmlns="http://www.w3.org/2000/svg"
     
       
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <Path
           fill={COLORS.yellow}
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.63 12.24l-4.29 4.29a.75.75 0 01-1.06 0l-4.29-4.29a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.01 3.01V6c0-.41.34-.75.75-.75s.75.34.75.75v10.19l3.01-3.01c.29-.29.77-.29 1.06 0 .15.15.22.34.22.53s-.08.39-.22.53z"
        />
      </Svg> :
         <Svg
         xmlns="http://www.w3.org/2000/svg"
         style={styles.tabBarIconImage}
        
         viewBox="0 0 24 24"
         fill="none"
         {...props}
       >
         <Path
            fill={COLORS.black1}
           d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.63 12.24l-4.29 4.29a.75.75 0 01-1.06 0l-4.29-4.29a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.01 3.01V6c0-.41.34-.75.75-.75s.75.34.75.75v10.19l3.01-3.01c.29-.29.77-.29 1.06 0 .15.15.22.34.22.53s-.08.39-.22.53z"
         />
       </Svg> 
      );
    case 'Orangy':
      return (
        isFocused ?
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        style={styles.tabBarIconImage}
        viewBox="0 0 24 24"
        
        {...props}
      >
        <Path
          d="M11.5 2C6.26 2 2 6.26 2 11.5S6.26 21 11.5 21s9.5-4.26 9.5-9.5S16.74 2 11.5 2zm0 11.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zm3-3h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zm6.8 11.249c-.18 0-.36-.07-.49-.2l-1.86-1.86a.706.706 0 010-.99c.27-.27.71-.27.99 0l1.86 1.86c.27.27.27.71 0 .99-.14.13-.32.2-.5.2z"
          fill={COLORS.yellow}
        />
      </Svg> :
           <Svg
           xmlns="http://www.w3.org/2000/svg"
           style={styles.tabBarIconImage}
           viewBox="0 0 24 24"
           {...props}
           fill={COLORS.black2}
         >
           <Path
             d="M11.5 2C6.26 2 2 6.26 2 11.5S6.26 21 11.5 21s9.5-4.26 9.5-9.5S16.74 2 11.5 2zm0 11.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zm3-3h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zm6.8 11.249c-.18 0-.36-.07-.49-.2l-1.86-1.86a.706.706 0 010-.99c.27-.27.71-.27.99 0l1.86 1.86c.27.27.27.71 0 .99-.14.13-.32.2-.5.2z"
             fill={COLORS.black1}
          
           />
         </Svg>

      );

    case 'Favourite':
      return (
        isFocused ?
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        style={styles.tabBarIconImage}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <Path
          d="M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 00-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59z"
          fill={COLORS.yellow}
        />
      </Svg>:
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 00-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59z"
        fill={COLORS.black1}
      />
    </Svg>

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
import DownloadNext from '../../../screens/general/Orangy/DownloadNext';

const Stack = createStackNavigator();


const DownloadStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.DownloadScreen} component={Download} />
    </Stack.Navigator>
  );
};

const OrangyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.OrangyScreen} component={Orangy} />
      <Stack.Screen name={ROUTES.DownloadNext_Screen} component={DownloadNext} />
    </Stack.Navigator>
  );
};

const FavouriteStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.FavouriteScreen} component={Favourite} />
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
      <Tab.Screen name={ROUTES.Download} component={DownloadStack} />
      <Tab.Screen name={ROUTES.Orangy} component={OrangyStack} />
      <Tab.Screen name={ROUTES.Favourite} component={FavouriteStack} />

    </Tab.Navigator>
  );
}
