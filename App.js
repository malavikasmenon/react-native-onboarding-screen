import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen'

import OnBoarding from './screens/OnBoarding';
import LoginScreen from  './screens/LoginScreen';

const AppStack = createStackNavigator();


const App = () => {

  
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then( value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if( isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return(
      <NavigationContainer>
      <AppStack.Navigator
        headerMode = "none"
      >
        <AppStack.Screen name = "Onboarding" component = {OnBoarding} />
        <AppStack.Screen name = "Login" component = {LoginScreen} />

      </AppStack.Navigator>
    </NavigationContainer>
    );
  } else {
      return <LoginScreen />
  }
}

export default App;