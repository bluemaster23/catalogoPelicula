import React from 'react';
import {
    ActivityIndicator,
    ScrollView,
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
import { ViewSubtitle , ViewTitle , ImgBack ,ViewText , ViewAutor, ViewGen} from './layout/component';


export default function Only({route, navigation} : Navi ){
    const { data, error, isLoading } = useGetMovieListQuery({name: route.params.id, page: '1'});
    return (
        <ScrollView>
            {!isLoading ?
                <View>
                    <View style={{height: 250,justifyContent: 'flex-end'} }>
                        <ImgBack  source={{uri :`https://image.tmdb.org/t/p/w500/${data.backdrop_path}` }} />
                    </View>
                    <View style={{padding: 5}}>
                        <View>
                            <ViewTitle>{data.original_title}</ViewTitle>
                        </View>      
                        <ViewAutor>
                            {data.genres.map(function (res: genero) {
                                return (<ViewGen>
                                            <Text style={{fontWeight: 'bold'}}>{res.name}</Text>
                                        </ViewGen>)
                            })}
                        </ViewAutor>
                        <View style={{marginTop: 10}}>
                            <ViewText style={{textAlign: 'justify'}}> {data.overview} </ViewText>
                        </View>
                        <View>
                            <ViewSubtitle>Compañias Creadoras:</ViewSubtitle>
                        </View>
                        <ViewAutor >
                            {data.production_companies.map(function (res : production){
                                return <IconUser url={res.logo_path} name={res.name} />
                            })}
                        </ViewAutor>      
                    </View>
                </View>
                :
                <ActivityIndicator size="large" />
                }
            
        </ScrollView>
    )
}
