import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {  logInWithKakao,  unlinkKakao } from '../login/service/loginService';
interface loginProps {

}


export function loginButton(props : loginProps) {

        return (
                <View style={{alignItems : 'center', justifyContent : 'center'}}>
                        {/* <TouchableOpacity
                        style={{height : 50, width : 200,  borderRadius : 15, backgroundColor : '#C4C4C4', justifyContent : 'center', alignItems : 'center' }}
                        onPress={() => logInWithNaver()}>
                                <Text>네이버 로그인</Text>
                        </TouchableOpacity> */}

                        <TouchableOpacity
                        style={{height : 50, width : 200,  borderRadius : 15, backgroundColor : '#C4C4C4', justifyContent : 'center', alignItems : 'center' }}
                        onPress={() => logInWithKakao()}>
                                <Text>카카오 로그인</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={{height : 50, width : 200,  borderRadius : 15, backgroundColor : '#C4C4C4', justifyContent : 'center', alignItems : 'center' }}
                        onPress={() => {
                                AsyncStorage.getItem('ACT',(err,result) => {

                                }).then((item) => {console.log(item)})
                                // console.log('refreshToken : ' , AsyncStorage.getItem('RFT'))
                        }}>
                                <Text>토큰 확인</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity
                        style={{height : 50, width : 200,  borderRadius : 15, backgroundColor : '#C4C4C4', justifyContent : 'center', alignItems : 'center' }}
                        onPress={() => {logoutWithNaver()}}>
                                <Text>카카오 로그아웃</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={{height : 50, width : 200,  borderRadius : 15, backgroundColor : '#C4C4C4', justifyContent : 'center', alignItems : 'center' }}
                        onPress={() => {unlinkKakao()}}>
                                <Text>카카오 언링크</Text>
                        </TouchableOpacity> */}
                        
                </View>
        );
}
const styles = StyleSheet.create({})