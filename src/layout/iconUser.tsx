import { FLOWDECLARATION_TYPES } from '@babel/types';
import React , {FC} from 'react';
import {
    SafeAreaView,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    Text,
    Image,
    View,
  } from 'react-native';
  import styled from 'styled-components/native';
  interface production {
    url: string,
    name: string
}

const  ImgBack  = styled.Image` width: 45px; height: 45px; `;
const IconUser : FC<production>  = ({ url, name }: production) =>{
    return (
        <View style={{width: 90, alignContent:'center', padding: 5, alignItems: 'center'}}>
            <View style={style.icon}>
                <ImgBack resizeMode={"center"} source={{uri: `https://image.tmdb.org/t/p/w500/${url}`}} />
            </View>
            <Text style={{textAlign: 'center', fontSize: 12}}>{name}</Text>
        </View>
    )
}

const style=  StyleSheet.create({
    container:{
        flexDirection:'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "white",
        padding: 5,
        width: 60 ,
        height: 60 ,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default IconUser;