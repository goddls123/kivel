import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

interface chatModalMenuProps {
    text    : string
    icon?   : any
    setModalVisible(value : boolean) : any
}

export function ChatModalMenu(props: chatModalMenuProps) {
  return (
    <View style={{backgroundColor: 'white', borderWidth: 1}}>
      <TouchableOpacity
        onPress={() => {
          props.setModalVisible(false)
        }}>
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({});
