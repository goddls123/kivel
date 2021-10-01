import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import StackNav from './src/navigation/stackNav'
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens'
// import { Provider } from 'react-redux'
// import { store } from './src/redux/store/store'
// import { SplashScreen } from './src/screen/common/splash/splashScreen';
// import { WelcomePage } from './src/screen/login/welcomePage/welcomePage';
import client from './src/connection/client';
import { ApolloProvider, useQuery,gql } from '@apollo/react-hooks';
import { Alert } from 'react-native';
// import messaging from '@react-native-firebase/messaging';

import { ApolloClient, HttpLink, split, InMemoryCache, Cache } from '@apollo/client';
import { Home } from './src/navigation/home';



//네비게이션 사용시 렌더 성능 향상
// enableScreens()


export default function App () {
	
	return (
		// <Provider store={store}>
			<ApolloProvider client={client}>
				<Home/>
			</ApolloProvider>
		// </Provider>
	)

}
