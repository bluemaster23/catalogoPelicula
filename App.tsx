/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { View, Text , ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/home";
import { Provider } from 'react-redux';
import { setupStore } from './src/app/store';
import Only from './src/only';
import {ParamsNavigation} from "./src/app/params";
const Stack = createNativeStackNavigator<ParamsNavigation>();
const store = setupStore()
const App: () => Node = () => {
  return (
      <Provider store={store}>
        
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Only" component={Only} />

            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
};


export default App;
