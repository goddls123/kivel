import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

interface buttonProps {
    textContent: string;
    backgroundColor?: string;
    borderColor? : string;
    textColor?: string;
    textSize? : number;
    onPress?() : void;
}

export function Button(props: buttonProps) {
  
  return (
    <View style={{flex: 1}}>
        <TouchableOpacity 
            style={
                [styles.buttonStyle,{ 
                    backgroundColor: props.backgroundColor || 'white', 
                    borderColor : props.borderColor || '#E16F55'
                }]
            }
            onPress={props.onPress}
        >
            <Text style={
                [styles.textStyle,{
                    color : props.textColor || '#E16F55' ,
                    fontSize : props.textSize || 20
                  }
                ]}
            > {props.textContent} </Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 35,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  textStyle:{
    margin: 15,
    fontWeight: 'bold',
  }
});
