import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import { useGetMovieListQuery } from '../service/getMovieList';
import {useTheme} from '@react-navigation/native';
import { NaviH } from "../app/params";
import Carousel from 'react-native-snap-carousel';
interface resInfo {
  url : string,
  original_title : string,
  poster_path: string,
  id: number,
  item : {
      id : number,
      original_title: string,
      poster_path: string,
      vote_average: number
  },
  index: number
}
import { ViewTitle ,ViewContent } from './component';

import CardMovie from './cardMovie';

export default function Carrusel({route, navigation } : NaviH , nombre :string , title: string){
  const { data, error, isLoading } = useGetMovieListQuery({name: nombre, page: '1'});
  const { colors } = useTheme();
  
    return (
    <ScrollView>
        { isLoading ?
          <View>
            <Text>Cargando</Text>
          </View>
        : 
        <SafeAreaView style={{flex: 1,padding: 10, }}>
          <View style={{flexDirection: 'row', alignContent:'center', alignSelf:"flex-end"}}>
            <ViewTitle>{title}</ViewTitle>
            <Text style={{color: '#ddd'}} onPress={():void =>{ navigation.navigate("More",  {tipo : nombre}   ) }} >Ver más</Text>
          </View>
          <ViewContent>
            <Carousel
                layout={"default"}
                data={data.results}
                sliderWidth={200}
                renderItem={ (data: resInfo)=>{ return CardMovie(data.item  , {route, navigation } ) }}
                itemWidth={230}
              />
          </ViewContent>
        </SafeAreaView>
        }
    </ScrollView>
    );
}

