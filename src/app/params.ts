import { NativeStackScreenProps } from '@react-navigation/native-stack';
 export type ParamsNavigation = {
    Home: undefined;
    Only: {id : number};
    More: {tipo: string}
};

export type Navi = NativeStackScreenProps<ParamsNavigation, 'Only'>;
export type NaviH = NativeStackScreenProps<ParamsNavigation, 'Home'>;
export type NaviM = NativeStackScreenProps<ParamsNavigation, 'More'>;