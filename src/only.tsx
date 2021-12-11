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
interface production {
    logo_path: string,
    name: string
}
interface genero{
    name: string
}

import styled from 'styled-components/native';
import IconUser from './layout/iconUser';
const  ImgBack  = styled.Image`height: 100%; width: 100%;`;
const  ViewGen  = styled.View`padding: 5px 10px; border: 1px solid #c2c2c2; margin: 5px; border-radius: 15px;`;

export default function Only({route, navigation} : Navi ){
    const { data, error, isLoading } = useGetMovieListQuery({name: route.params.id, page: '1'});
    return (
        <ScrollView>
            
            {!isLoading ?
                <View>
                    <View style={style.view }>
                        <ImgBack  source={{uri :`https://image.tmdb.org/t/p/w500/${data.backdrop_path}` }} />
                    </View>
                    <View style={{padding: 5}}>
                        <View>
                            <Text style={style.title}>{data.original_title}</Text>
                        </View>      
                        <View style={style.author}>
                            {data.genres.map(function (res: genero) {
                                return (<ViewGen>
                                            <Text style={{fontWeight: 'bold'}}>{res.name}</Text>
                                        </ViewGen>)
                            })}
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text style={{textAlign: 'justify'}}> {data.overview} </Text>
                        </View>
                        <View>
                            <Text style={style.subtitle}>Compañias Creadoras:</Text>
                        </View>
                        <View style={style.author}>
                            {data.production_companies.map(function (res : production){
                                return <IconUser url={res.logo_path} name={res.name} />
                            })}
                        </View>      
                    </View>
                </View>
                :
                <View>
                    <Text>Cargando</Text>
                </View>
                }
            
        </ScrollView>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize: 20,
        paddingTop: 20,
    },
    subtitle:{
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5
    },
    view:{
        height: 250,
        justifyContent: 'flex-end'
    },
    text:{
        fontSize: 18,
        color : '#fff',
        fontWeight: 'bold'

    },
    author:{
        flex: 1 ,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 5
    }
});