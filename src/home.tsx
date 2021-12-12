import React , {useState} from 'react';
import {ScrollView, Modal,TouchableHighlight,View,Text, ActivityIndicator} from 'react-native';
import { NaviH } from "./app/params";
import Carrusel from './layout/carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextSearch ,ButtonGen, ViewSearch , InputSearch, Content, ImgBack, ViewText, ViewList, ViewTitle, ViewModal} from './layout/component';
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
          <TextSearch>Bienvenido, ¿Que deseas ver hoy?</TextSearch>
          <ButtonGen 
            title='Buscar pelicula'
            onPress={():void=> { setBuscar(''); setVisible(!visible);}}
          >
            <Text>Buscar Película</Text>
          </ButtonGen>
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
           
            <Content> 
              <Text style={{textAlign: 'center'}} onPress={()=>setVisible(!visible)}><Icon name="close" size={40} color="#dddddd" /></Text>
              <InputSearch 
                value={buscar}
                onChangeText={setBuscar}
                placeholder="Buscar"
              />
            </Content>
            <ViewModal>
            {(isLoading  ) ?
               <ActivityIndicator size="large" />
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
                    <ViewList key={res.id} style={{borderBottom: 5, marginBottom: 5 , borderColor: '#ddd'}} >
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
            </ViewModal>
          </ScrollView>
        </Modal>

    </ScrollView>
    );
}