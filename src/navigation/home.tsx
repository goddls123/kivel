import { gql } from 'apollo-boost'
import React from 'react'
import { View, StyleSheet, TextInput, Touchable, TouchableOpacityBase, TouchableOpacity, Text, Button } from 'react-native';
import { useQuery, useMutation,  } from '@apollo/react-hooks';


const GET_CHAT_LIST = gql`
  query { 
    chats {
        chat_id
        chat_room_id
        content
        send_time
        deleteYn
        type
    }
  }
`;

interface home {

}

export function home({route, navigation } : any) {

    const [test, setTest] = React.useState<string>()
    const {data : chatListData, loading : chatListLoading, error : chatListError, subscribeToMore } = useQuery(GET_CHAT_LIST);


    const [chatList, setChatList] = React.useState<any>([])
    console.log(chatListData)
    // React.useEffect(() =>{
    //     if(chatListData && chatListData.chats){
    //         setChatList(chatListData.chats)
    //     }
    // },[chatListData])


        return (
            <View style={{ backgroundColor : 'white', flex : 1}}>
                <View style={{borderWidth : 1, borderColor : 'black'}}>
                    <Button onPress={() => navigation.navigate("Login")} title="adslkjfdjskf" />
                </View>
            </View>
        );
}
const styles = StyleSheet.create({})