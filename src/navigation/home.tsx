import { gql } from 'apollo-boost'
import React from 'react'
import { View, StyleSheet, TextInput, Touchable, TouchableOpacityBase, TouchableOpacity, Text, Button } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';


const GET_CHAT_LIST = gql`
query{
    findChatRoom(roomId : "1"){
      chat_room_id
    }
  }
`;

interface home {

}



export function Home({route, navigation } : any) {


    const { loading, error, data } = useQuery(GET_CHAT_LIST);

    const [chatList, setChatList] = React.useState<any>([])
  



        return (
            <View style={{ backgroundColor : 'white', flex : 1}}>
                <View style={{borderWidth : 1, borderColor : 'black'}}>
                    <Button onPress={() => navigation.navigate("Login")} title="adslkjfdjskf" />
                </View>
            </View>
        );
}
const styles = StyleSheet.create({})