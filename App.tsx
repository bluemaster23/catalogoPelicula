/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import { NavigationContainer, DefaultTheme,DarkTheme } from '@react-navigation/native';
import { View, Text , Switch } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/home";
import { Provider } from 'react-redux';
import { setupStore } from './src/app/store';
import Only from './src/only';
import {ParamsNavigation} from "./src/app/params";
import More from './src/more';
const Stack = createNativeStackNavigator<ParamsNavigation>();
const store = setupStore();

const MyTheme = {
  dark:{
    dark: true,
    colors: {
      primary: 'white',
      background: '#1e1e1e',
      card: '#4895ac',
      text: 'white',
      border: '#c9c9c9',
      notification: 'rgb(255, 69, 58)',
    }
  }, 
  light:{
    dark: false,
    colors: {
      primary: 'black',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'black',
      border: '#ddd',
      notification: 'rgb(255, 69, 58)',
    }
  }

};

const App: () => Node = () => {
  const [mode, setmode] = useState(true);
  const scheme = useColorScheme();
  return (
      <Provider store={store}>
        <AppearanceProvider>
          <NavigationContainer  theme={scheme === 'dark' ? MyTheme.dark :  MyTheme.light}>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
              <Stack.Screen name="Only" component={Only} options={{headerShown: false}} />
              <Stack.Screen name="More" component={More} options={{headerShown: false}}/>
            </Stack.Navigator>
          </NavigationContainer>
          </AppearanceProvider>
      </Provider>
  );
};


export default App;
