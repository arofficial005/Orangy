import {NavigationProp, RouteProp} from '@react-navigation/native';

export interface GenericNavigation {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}
