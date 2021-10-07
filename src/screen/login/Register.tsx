import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import { RegisterButton } from './components/RegisterButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';

interface registerProps {
	navigation : StackNavigationProp<stackInterface,'Register'>;
}

export function Register(props: registerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{height: '13%'}} />
        <Image
          source={require('../../assets/icons/logo.png')}
          style={styles.imageStyle}></Image>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>키블과 함께</Text>
          <Text style={styles.textStyle}>우리아이를 지켜봐요!</Text>
        </View>
        <View style={{height: '15%'}} />
		<RegisterButton text={'회원가입'} textColor={'#ffffff'} style={{backgroundColor: "#ff8a5c"}} />
		<RegisterButton text={'로그인'} textColor={'#ff8a5c'} onPress={() => props.navigation.navigate('SocialLogin')}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: SIZE_WIDTH * 0.05,
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111111',
  },
});
