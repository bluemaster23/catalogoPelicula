import { NavigationContainer } from '@react-navigation/native';
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
import { useGetMovieListQuery } from './service/getMovieList';
interface resInfo {
    url : string,
    original_title : string,
    poster_path: string,
    id: number,
    item : {
        id : number,
        original_title: string,
        poster_path: string
    },
    index: number
}
import { NaviH } from "./app/params";
import Carousel from 'react-native-snap-carousel';





export default function Home({route, navigation } : NaviH){
  const { data, error, isLoading } = useGetMovieListQuery({name: 'popular', page: '1'});
  console.log(data, error,  'adsfadsf');


  const carouse = ({item    ,index } : resInfo) =>{
    return (
        <View style={styles.container}>
          <ImageBackground resizeMode={"stretch"} style={styles.img} source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}></ImageBackground>
          <Text onPress={()=>{
              navigation.navigate("Only",  {id : item.id} );
          }} style={styles.Text}>{item.original_title}</Text>
        </View>
    )
  }
  
    return (
    <ScrollView>
        {typeof data === 'undefined' ?
          <View>
            <Text>Error</Text>
            </View>
        : 
        <SafeAreaView style={{flex: 1,paddingTop: 10, }}>
          <View style={styles.content}>
            <Carousel
                layout={"default"}
                data={data.results}
                sliderWidth={200}
                renderItem={carouse}
                itemWidth={230}
              />
          </View>
        </SafeAreaView>
        }
    </ScrollView>
    );
}


const styles = StyleSheet.create({
    content:{
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'center'
    },
    container: {
    },
    Text: {
      textAlign: 'left',
      fontSize: 15
    },
    img:{
      height: 200,
      borderRadius: 20,
    }
});