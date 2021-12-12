import { NavigationContainer } from '@react-navigation/native';
import React , {useState} from 'react';
import {
  Button,
  ScrollView,
  Modal,
  TouchableHighlight,
  View,
  Text
} from 'react-native';

import { NaviH } from "./app/params";
import Carrusel from './layout/carousel';
import { TextSearch ,ViewSearch , InputSearch, Content , ImgBack, ViewText, ViewList, ViewTitle} from './layout/component';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useGetMovieSearchQuery } from './service/getMovieList';
interface movie {
  original_title: string,
  overview: string,
  poster_path: string,
  id: number
}

export default function Home({route, navigation } : NaviH){
  const [ buscar, setBuscar] = useState('');
  const [visible, setVisible]= useState(false);

  const { data, error, isLoading } = useGetMovieSearchQuery({name: buscar});  
    return (
    <ScrollView>
        <ViewSearch>
          <TextSearch>Bienvendo, ¿Que deseas ver hoy?</TextSearch>
          <Button 
            title='Buscar pelicula'
            color={"#333"}
            onPress={():void=> { setBuscar(''); setVisible(!visible);}}
          />
        </ViewSearch>   
        {Carrusel({route, navigation }, "popular" , "Los más populares")}
        {Carrusel({route, navigation }, "top_rated" , "Mejores puntuados")}
        {Carrusel({route, navigation }, "upcoming" , "Próximas en cines")}
        <Modal
          animationType='slide'
          transparent={false}
          onRequestClose={() => {setVisible(!visible)}}
          visible={visible}
        > 
         <ScrollView>
           <View style={{flex: 1}}>
            <Content style={{flex: 1, justifyContent: 'center' , flexDirection: 'row', alignItems:'center', backgroundColor: "#eeeeee"}}> 
              <Text style={{textAlign: 'center'}} onPress={()=>setVisible(!visible)}><Icon name="close" size={40} color="#dddddd" /></Text>
              <InputSearch 
                value={buscar}
                onChangeText={setBuscar}
                placeholder="Buscar"
              />
              
            </Content>
          </View>
            {(isLoading  ) ?
              <View>
                <Text>Cargando</Text>
              </View>
            :
            <View style={{flex: 1}}>
                {data ? 
                <View>
                  {data.results.map( (res : movie) => {
                    return (
                      <TouchableHighlight onPress={()=>{
                        setVisible(!visible)
                        navigation.navigate("Only",  { id: res.id} );
                    }} >
                    <ViewList key={res.id} style={{borderBottom: 5, marginBottom: 5}} >
                      <View style={{width: '35%', height: 150}} >
                        <ImgBack resizeMode={"stretch"}  source={{uri: `https://image.tmdb.org/t/p/w500/${res.poster_path}`}} />
                      </View>
                      <View style={{width: '65%'}}>
                        <ViewTitle style={{paddingLeft : 10 , margin: 0}}>{res.original_title}</ViewTitle>
                        <ViewText ellipsizeMode='tail' numberOfLines={4} style={{padding: 10}}> {res.overview || 'Sin descripción'}</ViewText>
                      </View>
                    </ViewList>
                    </TouchableHighlight>
                    )
                  } )}
                </View>: null }
                
              </View>
            }
          </ScrollView>
        </Modal>

    </ScrollView>
    );
}