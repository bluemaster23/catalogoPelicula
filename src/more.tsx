import React , {useState} from 'react';
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
  import { NaviM } from "./app/params";
import CardMovie from './layout/cardMovie';
  
import { useGetMovieListQuery } from './service/getMovieList';
interface resInfo {
    id : number,
    original_title: string,
    poster_path: string,
    vote_average: number
}
export default function More({route, navigation} : NaviM, tipo :string) {

    const [page, setPage] =  useState("2");
    const { data, error, isLoading } = useGetMovieListQuery({name: route.params.tipo, page: page});
    return (
        <ScrollView>
        { (isLoading) ? 
            <View>
                <Text>Cargando</Text>
            </View>:
            <View style={style.container}>
                {data.results.map((res : resInfo , i :number )=> {
                    return  (
                        <View key={"card"+i} style={style.item}>
                            {CardMovie( res , ({route, navigation} ))}
                        </View>)
                })}
            </View>
        }
        </ScrollView>
    );
}
const style =  StyleSheet.create({
    container:{
        flex: 1 ,
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap:"wrap",
        flexDirection: "row"
    },
    item:{
        width: 180,
        padding: 5
    }
});