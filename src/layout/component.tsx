import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
const { colors } = useTheme();

export const  ImgBack  = styled.Image`height: 100%; width: 100%; border-radius: 5px`;
export const ViewText = styled.Text` text-aling: left; font-size: 15px; color: ${colors.primary}`;
export const ViewTextIcon = styled.Text` text-aling: center; font-size: 12px; color: ${colors.primary}`;
export const ViewTitle = styled.Text`flex:1; text-aling: left; font-size: 20px; color: ${colors.primary}`;
export const ViewSubtitle = styled.Text` text-aling: left; font-size: 15px; color: ${colors.primary}`;
export const ViewContent = styled.View` flex: 1 ; flex-direction : row ; justify-content:center`;
export const ViewContentIcon = styled.View` border-radius: 100px; background-color: ${colors.background};
                                            justify-content:center;padding:5px;width:60px; height: 60px; justify-content:center;
                                            alingn-items:center`;
export const ViewAutor = styled.View` flex: 1 ; flex-direction : row ; justify-content:center; flex-wrap: wrap; margin-top: 10px; margin-bottom:5px`;
export const  ViewGen  = styled.View`padding: 5px 10px; border: 1px solid #c2c2c2; margin: 5px; border-radius: 15px;`;
