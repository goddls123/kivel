import axios from 'axios';
import React from 'react'
import { View, StyleSheet, TextInput, Text, ScrollView, Touchable, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NaverMapView, { Coord, Marker } from 'react-native-nmap';
import { Button } from '../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import Geolocation from '@react-native-community/geolocation';


export function Map() {

		const [listShow , setListShow] = React.useState<boolean>(false)
		const [localList, setLocalList] = React.useState<any>()
		const [searchText, setSearchText] = React.useState<string>()

		const [bottomView, setBottomView] = React.useState<boolean>(false)

		// 마커 설정
		const [selectedItem, setSelectedItem] = React.useState<any>()
		
		// 현재 위치 설정
		const [myLoc, setMyLoc] = React.useState<Coord>()
		React.useEffect(()=>{
			Geolocation.getCurrentPosition((position) => {
				setMyLoc({
					latitude : position.coords.latitude,
					longitude : position.coords.longitude
				})
			})
		},[])
		
		const searchAPI = async (searchText : string) => {
			try {
				await axios.get(
					"https://dapi.kakao.com/v2/local/search/keyword.json?",
					{	
						params : {
							query : searchText,
							x : myLoc?.longitude,
							y : myLoc?.latitude,
							sort : 'distance',
							radius : 10000
						},
						headers: {
							Authorization: "KakaoAK b08cfd582b7a09b4c1ab2a56edf3c103"
						},
					},
				).then((response : any) => 
					setLocalList(response.data.documents)
				)
			} catch (error) { 
				console.log(error);
			}
		};
		

		function itemTouchHandler(items : any) {
			setListShow(false),
			setSearchText(items.place_name)
			setSelectedItem(items)
			setBottomView(true)
		}
		function textInputTouchHandler(text : string){
			setSearchText(text)
			searchAPI(text)
		}

		function textInputTouchStartHandler() {
			setListShow(true)
			setBottomView(false)
		}

		function mapTouchHandler() {
			setListShow(false)
			setBottomView(false)
		}

		return (
			<View style={{flex : 1}}>
				
				<NaverMapView style={{width: '100%', height: '100%'}}
									showsMyLocationButton={true}
									center={selectedItem ? {latitude : parseFloat(selectedItem.y), longitude : parseFloat(selectedItem.x)} : myLoc }
									onTouch={() => mapTouchHandler()}>
					{
						selectedItem ? <Marker coordinate={{latitude : parseFloat(selectedItem.y), longitude : parseFloat(selectedItem.x)}} onClick={() => setBottomView(true)}/> : null
					}
				</NaverMapView>

				{/* 상단 TEXT INPUT */}
				<View style={styles.searchView}>
					<TextInput 
					placeholder="검색어를 입력해 주세요"
					onChangeText={(text) => textInputTouchHandler(text)}
					value={searchText}
					onTouchStart={() => textInputTouchStartHandler()}
					style={styles.textInputStyle}></TextInput>

					<ScrollView style={{maxHeight : SIZE_HEIGHT * 0.4}}>
						{
							listShow && localList?.map((items : any, id : any) =>{
								return(
									<TouchableOpacity 
									key={id} 
									style={{height : 60, justifyContent : 'center' }}
									onPress={() => itemTouchHandler(items)}>
										<Text>{items.place_name}</Text>
										<Text>{items.address_name}</Text>
									</TouchableOpacity>
								)
							})
						}
					</ScrollView>
				</View>

				{/* 하단 버튼 */}
				{
					bottomView 
					? 
					<View style={styles.storeView}>
						<Text>{selectedItem.place_name}</Text>
						<Text>{selectedItem.road_address_name}</Text>
						<Text>전화번호 : {selectedItem.phone}</Text>
						<TouchableOpacity>
							<Text style={{paddingHorizontal : 10, paddingVertical : 5, borderWidth :1, borderColor : 'black'}}>장소 설정</Text>
						</TouchableOpacity>
					</View> 
					: null
				}
				
			</View>
		);
}
const styles = StyleSheet.create({
	searchView : {
		position : 'absolute', 
		top : 30, 
		width : '90%',
		alignSelf : 'center',
		paddingHorizontal : GLOBAL_MARGIN_HORIZON,
		backgroundColor : 'white',
		elevation : 5,
		borderRadius : 10,
	},
	textInputStyle: { 
		width : '90%',
		borderBottomWidth : 1,
		borderColor : "#ededed",
	},
	storeView : {
		position : 'absolute', 
		bottom : 30, 
		width : SIZE_WIDTH * 0.9,
		height : SIZE_WIDTH * 0.3,
		alignSelf : 'center',
		paddingHorizontal : GLOBAL_MARGIN_HORIZON,
		backgroundColor : 'white',
		justifyContent : 'center',
		elevation : 5,
		borderRadius : 10,
	}
})