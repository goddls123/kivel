import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { USER_LOGIN } from '../../../connection/queries';
import { stackInterface } from '../../../types/navigationParam';
import { logInWithKakao } from '../../login/service/loginService';
import { SIZE_HEIGHT, SIZE_WIDTH } from '../constants';

export function Splash() {
    


        return ( 
            <View style={{flex :1, backgroundColor : 'green'}}>
                <Image 
					source={require('../../../assets/icons/splash.png')} 
					style={{height : SIZE_HEIGHT , width : SIZE_WIDTH}}
				/>
            </View>
        );
}
const styles = StyleSheet.create({})