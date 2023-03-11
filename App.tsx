import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from '@redux/store';
import { navigationRef } from '@services/nav.service';
import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './src/routes';
import { initialConfig } from './src/shared/utils/config';
import SplashScreen from 'react-native-splash-screen'
import { StatusBar } from 'react-native';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
    initialConfig()
  }, [])

  const config = {
    screens: {
 
    },
  };
  
  const cohereLinking = {
    prefixes: [
      '',
    ],
    config,
  };

  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
        <StatusBar hidden />
          <NavigationContainer ref={navigationRef} linking={cohereLinking}>
            <Routes />
          
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
