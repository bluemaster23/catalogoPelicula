import React , {FC} from 'react';
import {View,} from 'react-native';
import { ImgBack, ViewContentIcon, ViewTextIcon } from './component';

interface production {
    url: string,
    name: string
}

const IconUser : FC<production>  = ({ url, name }: production) =>{
    return (
        <View style={{width: 90, alignContent:'center', padding: 5, alignItems: 'center'}}>
            <ViewContentIcon >
                <ImgBack resizeMode={"center"} source={{uri: `https://image.tmdb.org/t/p/w500/${url}`}} />
            </ViewContentIcon>
            <ViewTextIcon>{name}</ViewTextIcon>
        </View>
    )
}

export default IconUser;