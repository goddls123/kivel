import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import {GLOBAL_MARGIN_HORIZON, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import {Button} from '../common/components/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackInterface} from '../../types/navigationParam';
import { Divider } from '../common/divider';
import { ChildInfoAlarmModal } from '../childEnroll/components/ChildInfoAlarmModal';
import { essentialChildInfo } from '../../types/childInfoTypes';

interface registerProps {
    navigation: StackNavigationProp<stackInterface, 'Register'>;
}

export function Register(props: registerProps) {

    const [childInfo,setChildInfo] = React.useState<essentialChildInfo>();
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>

				<Divider height={'15%'} color='white' />

                <Image
                    source={require('../../assets/icons/logo.png')}
                    style={styles.imageStyle}
				></Image>

                <View style={styles.textView}>
                    <Text style={styles.textStyle}><Text style={{color : MAIN_COLOR}}>키블</Text>과 함께</Text>
                    <Text style={styles.textStyle}>우리아이를 지켜봐요!</Text>
                </View>
                <Divider height={'15%'} color='white' />
                
				<Button 
                    text={'회원가입'} 
                    textColor={'#ffffff'} 
                    style={{backgroundColor: MAIN_COLOR}}
                    onPress={() => props.navigation.navigate('Home')}
                ></Button>
                <Button 
                    text={'로그인'} 
                    textColor={MAIN_COLOR} 
                    style={{borderWidth : 1, borderColor : MAIN_COLOR}}
                    onPress={() => props.navigation.navigate('SocialLogin')} 
                ></Button>

            </View>

            
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    innerContainer: {
        flex: 1,
        marginHorizontal: GLOBAL_MARGIN_HORIZON,
    },
    textView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop : 10,
        marginBottom: 10,
    },
    imageStyle: {
        height: SIZE_HEIGHT * 0.1,
        width: SIZE_HEIGHT * 0.1,
        marginBottom: 10,
        alignSelf: 'center',
    },
    textStyle: {
        fontFamily: 'Cafe24Ssurround',
        fontSize: 30,
        textAlign: 'center',
        color: '#111111',
        marginBottom : 10
    },
});
