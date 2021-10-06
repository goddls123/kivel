import { gql, } from '@apollo/client';
import React from 'react'
import { View, StyleSheet, TextInput, Touchable, TouchableOpacityBase, TouchableOpacity, Text, Button, Alert } from 'react-native';
import { useQuery, useMutation,  } from '@apollo/react-hooks';
// import Modal from '../../components/common/modal'
import { GraphQLEnumType, } from 'graphql';

interface chattest1Props {

}
// 채팅 목록 조회


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

// 채팅 작성
const ADD_CHAT = gql`
 
  mutation createChat($ChatRoomCreateInput : ChatRoomCreateInput!, $CreateInput: CreateInput!) {
    createChat(ChatRoomCreateInput: $ChatRoomCreateInput, CreateInput: $CreateInput) {
        chat_id
        chat_room_id
        content
    }
  }`;

// 채팅 구독
const SUB_CHAT = gql`
  subscription addedChat($ChatRoomCreateInput : ChatRoomCreateInput!) {
      addedChat(ChatRoomCreateInput : $ChatRoomCreateInput){
        chat_id
        chat_room_id
        content
        send_time
        deleteYn
        type  
    }
}`;


  

export function chattest1(props : chattest1Props) {

    enum typeEnum {
        text,
        photo,
        video,
        calender,
        notice
    }

    const [modalVisible , setModalVisible,] = React.useState<boolean>(true)
    const roomNum = React.useRef(null)
    const [chatContent, setChatContent] = React.useState('')


    const {data : chatListData, loading : chatListLoading, error : chatListError, subscribeToMore } = useQuery(GET_CHAT_LIST);
    
    const [chatList, setChatList] = React.useState<any>([])
    console.log(chatList)
    React.useEffect(() =>{
        if(chatListData && chatListData.chats){
            setChatList(chatListData.chats)
        }
    },[chatListData])

    React.useEffect(() => {
        subscribeToMore({
            document: SUB_CHAT,
            variables: { ChatRoomCreateInput : {sender : "aa" , recipient : "bb"} },
            updateQuery: (prev, { subscriptionData }) => {
            console.log('subscriptionData', subscriptionData)
            if (!subscriptionData.data) return prev;
            const newChat = subscriptionData.data.addedChat;
            return setChatList((prevChat: any) => [...prevChat, newChat])  
            },
        });
    }, []);
        



    const [addChat, { loading, error }] = useMutation(ADD_CHAT, {})

    function add_chat() {
        // console.log(chatContent)
        addChat({
            variables : {
                ChatRoomCreateInput :{ recipient : "bb", sender : "aa" }, 
                CreateInput : {chat_room_id : 1, content : chatContent, deleteYn : false, type : "text"}
            }}).then(response =>{
            console.log('response', response)
        }).catch(error => 
            Alert.alert(error.message)
        )
    }


    return (
        <View style={{flex : 1, backgroundColor : 'white'}}>
            <View style={{flex : 1}}>
            {
                chatListLoading?
                <Text>로딩중</Text>
                :
                chatList?.map((item : any, key : number) => {
                    return (
                        <Text key={key}> {item.content} </Text>
                    )
                }) 
            }

            </View> 
            
            <View>
                <TextInput 
                    placeholder='채팅보내봐' 
                    value = {chatContent}
                    onChangeText = {(text) => setChatContent(text)}
                />
                <Button title="보내기" onPress={() => add_chat()} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({})