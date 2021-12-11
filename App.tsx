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
      card: 'rgb(255, 255, 255)',
      text: 'white',
      border: '#c9c9c9',
      notification: 'rgb(255, 69, 58)',
    }
  }, 
  light:{
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
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
          <NavigationContainer  theme={scheme !== 'dark' ? MyTheme.dark :  MyTheme.light}>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} 
                options={{
                  headerRight: () : void  =>{
                    <Switch 
                      thumbColor={mode ? "#fff" : "#f4f3f4"}
                      onValueChange={()=> {setmode(previousState  => !previousState)}}
                      value={mode}
                    />
                  }
                }}
              />
              <Stack.Screen name="Only" component={Only} />
              <Stack.Screen name="More" component={More} />
            </Stack.Navigator>
          </NavigationContainer>
          </AppearanceProvider>
      </Provider>
  );
};


export default App;
