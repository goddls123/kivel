import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login as kakaoLogin,
  logout as kakaoLogout,
  unlink,
  KakaoAccessTokenInfo,
  getAccessToken,
} from '@react-native-seoul/kakao-login';
import {NaverLogin} from '@react-native-seoul/naver-login';
import axios, {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


////////////////////////////네이버////////////////////////////
const androidkeys = {
  kConsumerKey: 'QuWkmldDj4pP3aPAq59I',
  kConsumerSecret: '6RQek41Dcj',
  kServiceAppName: '키블',
};

export const signInWithNaver = async () => {
  return new Promise((resolve, reject) => {
    NaverLogin.login(androidkeys, (err, token) => {
      console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
      if (err) {
        reject(err);
        return;
      }
      resolve(token);
    });
  });
};

export const logoutWithNaver = async () => {
  NaverLogin.logout();
  console.log('logout successed');
};

export const logInWithNaver = async () => {
  signInWithNaver().then((token: any) => {
    AsyncStorage.setItem('ACT', token.accessToken)
    AsyncStorage.setItem('RFT', token.refreshToken)
    AsyncStorage.setItem('platform', 'N')
  });
};

////////////////////////////네이버////////////////////////////

////////////////////////////카카오////////////////////////////

export const logInWithKakao = async () => {
  await kakaoLogin().then((token: KakaoOAuthToken) => {
    console.log(token)
    AsyncStorage.setItem('ACT', token.accessToken)
    AsyncStorage.setItem('RFT', token.refreshToken)
    AsyncStorage.setItem('platform', 'K')
  })
};

export const unlinkKakao = async (): Promise<string> => {
  const message = await unlink();

  return message;
};

export const logoutKakao = async (): Promise<string> => {
  const message = await kakaoLogout();

  console.log(message);
  return message;
};

////////////////////////////카카오////////////////////////////
