import { NavigationContainer } from '@react-navigation/native';
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
import { NaviH } from "../app/params";
import Carousel from 'react-native-snap-carousel';


import styled from 'styled-components/native';
const  ImgBack  = styled.Image`height: 100%; width: 100%; border-radius: 5px`;

export default function Carrusel({route, navigation } : NaviH , nombre :string , title: string){
  const { data, error, isLoading } = useGetMovieListQuery({name: nombre, page: '1'});
  

  const carouse = ({item    ,index } : resInfo) =>{
    return (
        <TouchableHighlight onPress={()=>{
                    console.log(item.id);
                navigation.navigate("Only",  {id : item.id} );
            }} >
            <View style={styles.container} >
            
                    <View style={{borderRadius: 10 , height: 250}} >
                        <ImgBack resizeMode={"stretch"}  source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}></ImgBack>
                    </View>
                <Text style={styles.Text}>{item.original_title}</Text>
            </View>
        </TouchableHighlight>
    )
  }
  
    return (
    <ScrollView>
        {typeof data === 'undefined' ?
          <View>
            <Text>Error</Text>
          </View>
        : 
        <SafeAreaView style={{flex: 1,padding: 10, }}>
           <View style={{flexDirection: 'row', alignContent:'center', alignSelf:"flex-end"}}>
             <Text style={styles.title}>{title}</Text>
             <Text >Ver mas</Text>
            </View>
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
      fontSize: 15,
    },
    img:{
      height: 200,
      borderRadius: 20
    },
    title:{
      fontSize: 20,
      fontWeight :'bold',
      flex: 1
    }
});