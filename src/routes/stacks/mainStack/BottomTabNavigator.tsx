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
import Svg, { Path } from 'react-native-svg';
import { Heart } from 'iconsax-react';
const Tab = createBottomTabNavigator();

type RenderTabIconProps = {
  routeName: string;
  isFocused: boolean;
};

function RenderTabIcon({ routeName, isFocused }: RenderTabIconProps) {
  const Down = require('../../../assets/BottomTabIcons/Downloads.svg');
  switch (routeName) {
    case 'Download':
      return (
      //   <View>
      //   <Svg width={24} height={24} viewBox="0 0 24 24">
      //     <Path fill={'red'} d={Heart} />
      //   </Svg>
      // </View>
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
            tintColor={COLORS.tabs}
            source={require('@assets/BottomTabIcons/Downloads.png')}
          />
      );
    case 'Orangy':
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
            tintColor={COLORS.tabs}
            source={require('@assets/BottomTabIcons/Orangy.png')}
          />

      );

    case 'Favourite':
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
            tintColor={COLORS.tabs}
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
