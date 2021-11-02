import axios from 'axios';
import React from 'react'
import { View, StyleSheet, TextInput, Text, ScrollView, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NaverMapView, { Coord, Marker } from 'react-native-nmap';
import { Button } from '../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import Geolocation from '@react-native-community/geolocation';


export function map() {

		
		const [listShow , setListShow] = React.useState<boolean>(false)
		const [localList, setLocalList] = React.useState<any>()
		const [searchText, setSearchText] = React.useState<string>()


		// 마커 설정
		const [markerCoord, setMarkerCoord] = React.useState<Coord>()
		
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
							x : myLoc?.latitude,
							y : myLoc?.longitude,
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
		

		return (
			<View style={{flex : 1}}>
				
				<NaverMapView style={{width: '100%', height: '100%'}}
									showsMyLocationButton={true}
									center={markerCoord ? markerCoord : myLoc }
									onTouch={() => setListShow(false)}>
					{
						markerCoord ? <Marker coordinate={markerCoord} onClick={() => console.warn('onClick! p0')}/> : null
					}
				</NaverMapView>


				{/* 상단 TEXT INPUT */}
				<View style={styles.searchView}>
					<TextInput 
					placeholder="검색어를 입력해 주세요"
					onChangeText={(text) => {setSearchText(text), searchAPI(text)}}
					value={searchText}
					onTouchStart={() => setListShow(true)}
					style={styles.textInputStyle}></TextInput>

					<ScrollView style={{maxHeight : SIZE_HEIGHT * 0.4}}>
						{
							listShow && localList?.map((items : any, id : any) =>{
								return(
									<TouchableOpacity 
									key={id} 
									style={{height : 60, justifyContent : 'center' }}
									onPress={() => {
										setListShow(false),
										setSearchText(items.place_name)
										setMarkerCoord({latitude : parseFloat(items.y) , longitude : parseFloat(items.x)})
									}}>
										<Text>{items.place_name}</Text>
										<Text>{items.address_name}</Text>
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
})