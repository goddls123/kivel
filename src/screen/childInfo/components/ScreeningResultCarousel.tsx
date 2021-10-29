import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, } from "react-native";
import ImageModal from "react-native-image-modal";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { SIZE_HEIGHT, SIZE_WIDTH } from "../../common/constants";
import Icon from 'react-native-vector-icons/Ionicons';
import { screeningResult } from "../../../types/screeningResultEnroll";
import { getDateYMD } from "../../common/service/dateService";
interface ItemProps {
  title: string;
  text: string;
}

// interface Props {
//   carouselItems?: ItemProps;
// }


interface ScreeningResultCarouselProps {
	data : screeningResult | undefined
}

export function ScreeningResultCarousel(props : ScreeningResultCarouselProps) {

		const [index,setIndex] = React.useState<number>(0)
		const moveLeft = () =>{
			if(props.data?.image && index <= 0){
				setIndex(props.data?.image.length -1)
			}
			else {
				setIndex(index -1)
			}
		}
		const moveRight = () => {
			if(props.data?.image && index >= props.data?.image.length - 1 ){
				setIndex(0)
			}
			else {
				setIndex(index + 1)
			}
		}
		console.log(index)

		return (
		  <SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				{
					props.data?.image
					?
						<View style={styles.imageContainer}>
							<TouchableOpacity onPress={() => moveLeft()}>
							<Icon name="chevron-back-outline" style={styles.chevronLeft} ></Icon>
							</TouchableOpacity>
							<ImageModal source={{uri : props.data?.image[index]}}
								style={{width : SIZE_WIDTH * 0.65 , height : SIZE_WIDTH }}
								resizeMode='contain'
							></ImageModal>
							<TouchableOpacity onPress={() => moveRight() }>
							<Icon name="chevron-forward-outline" style={styles.chevronRight} ></Icon>
							</TouchableOpacity>
						</View>
					: null
				}
				<Pagination
					dotsLength={props.data?.image?.length || 0}
					activeDotIndex={index}
					dotStyle={styles.dotStyle}
				  	inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
				/>

				{/* <View style={{backgroundColor : 'white', alignItems: 'center' , width : '100%'}}> */}
					<Text style={{fontSize : 20, color : 'white'}}>{props.data?.screeningName}</Text>
					<Text style={{fontSize : 20, color : 'white'}}>{props.data?.screeningDate ? getDateYMD(props.data.screeningDate,'-') : null }</Text>
					<Text style={{fontSize : 20, color : 'white'}}>{props.data?.screeningInstitution}</Text>
					<Text style={{fontSize : 20, color : 'white'}}>{props.data?.memo}</Text>
				{/* </View> */}
			</View>
		  </SafeAreaView>
		);

}

const styles = StyleSheet.create({
	container :{ flex: 1, paddingTop: 40, justifyContent : 'center' },
	innerContainer : { flex: 1, alignItems : 'center' , justifyContent : 'center'},
	imageContainer : {flexDirection : 'row', justifyContent : 'center', alignSelf : 'center', alignItems : 'center'},
	chevronLeft : {marginRight : 20, fontSize: 35, color : 'white'},
	chevronRight : {marginLeft : 20, fontSize: 35, color : 'white'},
	dotStyle : {
		width: 10,
		height: 10,
		borderRadius: 5,
		marginHorizontal: 8,
		backgroundColor: 'rgba(255, 255, 255, 0.92)'
	},
})