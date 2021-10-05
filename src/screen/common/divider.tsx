import React from 'react'
import { View, StyleSheet } from 'react-native';

interface dividerProps {
    height : number
    color? : string
}

export function Divider(props : dividerProps) {
        return (
            <View 
            style={{ 
                height  : props.height,
                backgroundColor : props.color || 'gray',
            }} />
        );
}
const styles = StyleSheet.create({})