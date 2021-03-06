import {ApolloClient, HttpLink, split, InMemoryCache} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';
import {createUploadLink} from 'apollo-upload-client';
import {OperationDefinitionNode} from 'graphql';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
// graphql api 주소
const wsLink = new WebSocketLink({
	uri: `ws://192.168.35.171:3000/graphql`,
	// uri: `ws://192.168.0.39:3000/graphql`,
	// uri: `ws://carnorm.com:3000/graphql`,
	options: {
		reconnect: true,
	},
});

const authLink = setContext(async (_, {headers}) => {
	const token = await AsyncStorage.getItem('ACT');
	const platform = await AsyncStorage.getItem('platform');

	console.log(token, platform);
	if (token && platform) {
		return {
			headers: {
				...headers,
				authorization: `${platform} ${token}`,
			},
		};
	}

	throw new Error('토큰없음 병신아');
});

const httpLink = createUploadLink({
	uri: 'http://192.168.35.171:3000/graphql',
	// uri: 'http://192.168.0.39:3000/graphql',
	// uri: 'http://carnorm.com:3000/graphql',
});

// subscription socket 통신 주소

// 작성한 두 주소 병합
const link = split(
	({query}) => {
		const {kind, operation} = getMainDefinition(
			query,
		) as OperationDefinitionNode;
		return kind === 'OperationDefinition' && operation === 'subscription';
	},
	authLink.concat(wsLink),
	authLink.concat(httpLink),
);

// apollo client 생성
const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

export default client;
