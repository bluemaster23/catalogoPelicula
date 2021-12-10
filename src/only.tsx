import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground,
    View,
  } from 'react-native';
  import { Navi } from "./app/params";
  
import { useGetPokemonByNameQuery } from './service/getPokemon';

export default function Only({route, navigation   } : Navi ,  name  :string){
    const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');
    return (
        <View>
           <ImageBackground style={style.view}  source={{uri: data.sprites.front_default}}>
                <Text style={style.text}>{data.species.name}</Text>
           </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    view:{
        height: 250,
        justifyContent: 'flex-end',
        backgroundColor: "#653565"
    },
    text:{
        fontSize: 18,
        color : '#fff',
        fontWeight: 'bold'

    }
});