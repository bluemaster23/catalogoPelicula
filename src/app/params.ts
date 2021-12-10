import { NativeStackScreenProps } from '@react-navigation/native-stack';
 export type ParamsNavigation = {
    Home: undefined;
    Only: {id : number};
};

export type Navi = NativeStackScreenProps<ParamsNavigation, 'Only'>;
export type NaviH = NativeStackScreenProps<ParamsNavigation, 'Home'>;
