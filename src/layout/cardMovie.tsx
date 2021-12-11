import React from 'react';
import {TouchableHighlight,View,} from 'react-native';
import StarRating from 'react-native-star-rating';
import {ImgBack , ViewText} from  "./component";
interface resInfo {
    id : number,
    original_title: string,
    poster_path: string,
    vote_average: number
}
const CardMovie = ( item   : resInfo , nav : any ) =>{

    return (
        <TouchableHighlight onPress={()=>{
                nav.navigation.navigate("Only",  { id: item.id} );
            }} >
            <View>
              <View style={{borderRadius: 10 , height: 250}} >
                  <ImgBack resizeMode={"stretch"}  source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}></ImgBack>
              </View>
              <View style={{width: 100, margin: 5}}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  fullStarColor={"#FCD307"}
                  rating={item.vote_average / 2 }
                  starSize={20}
                />
              </View>
              <ViewText>{item.original_title}</ViewText>
            </View>
        </TouchableHighlight>
    )
  }

  export default CardMovie;