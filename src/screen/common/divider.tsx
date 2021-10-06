import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native';

interface dividerProps {
    height : number
    color? : string
    style? : ViewStyle;
}

export function Divider(props : dividerProps) {
        return (
            <View 
            style={[{ 
                height  : props.height,
                backgroundColor : props.color || 'gray',
            },props.style]} />
        );
}
const styles = StyleSheet.create({})