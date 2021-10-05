import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import { enableScreens } from 'react-native-screens'
// import { Provider } from 'react-redux'
// import { store } from './src/redux/store/store'
// import { SplashScreen } from './src/screen/common/splash/splashScreen';
// import { WelcomePage } from './src/screen/login/welcomePage/welcomePage';
import client from './src/connection/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { Alert } from 'react-native';
import StackNav from './src/navigation/stackNav';
// import messaging from '@react-native-firebase/messaging';




//네비게이션 사용시 렌더 성능 향상
// enableScreens()

export default function App () {
	
	//push notification
	// const getToken = async () => {
	// 	const token = await messaging().getToken();
	// 	console.log("token : ", token)
	// }
	// React.useEffect(() => {
	// 	getToken();
	// 	const unsubscribe = messaging().onMessage(async remoteMessage => {
	// 	  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
	// 	});
	
	// 	return unsubscribe;
	//   }, []);

	// const [splash, setSplash] = React.useState(true);
	// React.useEffect(() => {
	//   setTimeout(() => {
	// 	setSplash(false);
	//   }, 1000);
	// }, []);

	return (
		// splash 
		// ?
		// <SplashScreen />
		// : 

		// <Provider store={store}>
			<ApolloProvider client={client}>
				<NavigationContainer>
					<StackNav />
				</NavigationContainer>
			</ApolloProvider>
		// </Provider>


	)

}
