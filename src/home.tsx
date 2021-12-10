import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import { NaviH } from "./app/params";
import Carrusel from './layout/carousel';



export default function Home({route, navigation } : NaviH){

    return (
    <ScrollView>
        {Carrusel({route, navigation }, "popular" , "Los más populares")}
        {Carrusel({route, navigation }, "top_rated" , "Mejores puntuados")}
        {Carrusel({route, navigation }, "upcoming" , "Próximas en cines")}
    </ScrollView>
    );
}
