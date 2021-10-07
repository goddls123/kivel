import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { SIZE_HEIGHT, SIZE_WIDTH } from '../constants';

interface splashProps {

}

export function Splash(props : splashProps) {
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