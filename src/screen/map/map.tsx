import axios from 'axios';
import React from 'react'
import { View, StyleSheet, TextInput, Text, ScrollView, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NaverMapView from 'react-native-nmap';
import { Button } from '../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';


export function map() {

		const [searchText, setSearchText] = React.useState<any>()
		const [listShow , setListShow] = React.useState<boolean>(false)

		const searchAPI = async (searchText : string) => {
			const ID_KEY = 'bIW0h8NRTXY7GMTjqIxX';
			const SECRET_KEY = 'vxSinefgbj';
			try {
				const { data: {items}} = await axios.get(
					'https://openapi.naver.com/v1/search/local.json',
					{	
						params: {query: searchText, display: 20},
						headers: {
							'X-Naver-Client-Id': ID_KEY,
							'X-Naver-Client-Secret': SECRET_KEY,
						},
					},
				)
				console.log(items)
				setSearchText(items);
			} catch (error) { 
				console.log(error);
			}
		};
		
		return (
			<View style={{flex : 1}}>
				
				<NaverMapView style={{width: '100%', height: '100%'}}
									showsMyLocationButton={true}
									// center={{...P0, zoom: 16}}
									onTouch={() => setListShow(false)}
				>
				</NaverMapView>


				{/* 상단 TEXT INPUT */}
				<View style={styles.searchView}>
					<TextInput 
					placeholder="검색어를 입력해 주세요"
					onChangeText={(text) => searchAPI(text)}
					onTouchStart={() => setListShow(true)}
					style={styles.textInputStyle}></TextInput>

					<ScrollView>
						{
							listShow && searchText?.map((items : any, id : any) =>{
								return(
									<TouchableOpacity key={id} style={{height : 60, justifyContent : 'center'}}>
										<Text>{items.title}</Text>
										<Text>{items.address}</Text>
									</TouchableOpacity>
								)
							})
						}
					</ScrollView>
				</View>

				{/* 하단 버튼 */}
			</View>
		);
}
const styles = StyleSheet.create({
	searchView : {
		position : 'absolute', 
		top : 30, 
		width : SIZE_WIDTH * 0.9,
		alignSelf : 'center',
		alignItems : 'center',
		marginHorizontal : GLOBAL_MARGIN_HORIZON,
		backgroundColor : 'white',
		elevation : 5,
		borderRadius : 10,
	},
	textInputStyle: { 
		width : '90%',
		borderBottomWidth : 1,
		borderColor : "#ededed",
	},
})