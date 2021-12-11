import { NavigationContainer } from '@react-navigation/native';
import React , {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { NaviH } from "./app/params";
import Carrusel from './layout/carousel';
import { TextSearch ,ViewSearch , InputSearch, ViewContent} from './layout/component';


export default function Home({route, navigation } : NaviH){
  const [ buscar, setBuscar] = useState('');
    return (
    <ScrollView>
        <ViewSearch>
          <TextSearch>Bienvendo, ¿Que deseas ver hoy?</TextSearch>
          <InputSearch 
            value={buscar}
            onChangeText={setBuscar}
          />
        </ViewSearch>   
        {Carrusel({route, navigation }, "popular" , "Los más populares")}
        {Carrusel({route, navigation }, "top_rated" , "Mejores puntuados")}
        {Carrusel({route, navigation }, "upcoming" , "Próximas en cines")}
    </ScrollView>
    );
}