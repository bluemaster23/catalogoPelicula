import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
  } from 'react-native';
  import { Navi } from "./app/params";
  
import { useGetMovieListQuery } from './service/getMovieList';

export default function Only({route, navigation   } : Navi ,  id  :number){
    console.log(id);
    const { data, error, isLoading } = useGetMovieListQuery({name: id, page: '1'});
    console.log(data);
    return (
        <ScrollView>
           {typeof data === 'undefined' ?
            <View>
                <View>
                    <Image source={{uri :`https://image.tmdb.org/t/p/w500/${data.backdrop_path}` }} />
                </View>
                <View>
                    <Text>{data.original_title}</Text>
                </View>
            </View>
             :
             <View>
                 <Text>Error</Text>
             </View>
            }
            
            
        </ScrollView>
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