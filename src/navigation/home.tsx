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

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "query{\r\n  files{\r\n    create_date\r\n    modify_date\r\n    originalName\r\n    fileName\r\n    size\r\n    extension\r\n  }\r\n}",
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("http://carnorm.com:3000/graphql", requestOptions)
  .then(response => response.text())
  .then(result => console.log('result : ',result))
  .catch(error => console.log('error', error));

export function Home({route, navigation } : any) {


    const { loading, error, data } = useQuery(GET_CHAT_LIST);

    const [chatList, setChatList] = React.useState<any>([])
  

    console.log(`graphql=> data : ${data} , loading : ${loading} , error : ${error}`);

        return (
            <View style={{ backgroundColor : 'white', flex : 1}}>
                <View style={{borderWidth : 1, borderColor : 'black'}}>
                    <Button onPress={() => navigation.navigate("Login")} title="adslkjfdjskf" />
                </View>
            </View>
        );
}
const styles = StyleSheet.create({})