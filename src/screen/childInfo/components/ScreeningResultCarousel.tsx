import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, } from "react-native";
import ImageModal from "react-native-image-modal";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { SIZE_HEIGHT, SIZE_WIDTH } from "../../common/constants";
import Icon from 'react-native-vector-icons/Ionicons';
import { screeningResult } from "../../../types/types";
import { getDateYMD } from "../../common/service/dateService";
import { ReactNativeFile } from "extract-files";
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
		
		const renderItem = ({item ,index} : {item : ReactNativeFile, index: number}) => {
			return(
				<View style={styles.imageContainer}>
					<ImageModal source={{uri : item.uri}}
						style={{width : SIZE_WIDTH * 0.65 , height : SIZE_WIDTH }}
						resizeMode='contain'
					></ImageModal>
				</View>
			)
		}


		return (
		  <SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>

			{
				props.data?.images
				?  
					<Carousel
					data={props.data?.images}
					renderItem={renderItem}
					sliderWidth={SIZE_WIDTH * 0.8}
              		itemWidth={SIZE_WIDTH * 0.8}
					onSnapToItem={(index) => setIndex(index)}
					useScrollView={false}
			   		></Carousel>

			   :	null
			  }				
					<Pagination
					dotsLength={props.data?.images?.length || 0}
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