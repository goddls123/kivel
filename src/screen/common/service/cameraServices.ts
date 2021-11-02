import { Alert, PermissionsAndroid, Platform } from 'react-native'
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';


const requestPermissions = async () => {
	if(Platform.OS === 'android') { 
		const result : any = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
		return result === PermissionsAndroid.RESULTS.GRANTED || result === true
	}
	return true;
}

export async function cameraOpen() {
	requestPermissions().then((result) => {
		if(result == true){
			const image = ImagePicker.openCamera({})
			return image
		}
		else{
			Alert.alert('카메라 권한이 없습니다.')
		}

	})
}

export async function imagePickOne() {
	requestPermissions().then(result => {
		if(result){
			const image = ImagePicker.openPicker({
				mediaType: 'photo',
				multiple: false,
				includeBase64: true,
				forceJpg: true,
			})
			return image		
		}
		else {
			Alert.alert('카메라 권한이 없습니다.')
		}
	})
};

export async function imagePickMultiple() {
	requestPermissions().then(result => {
		if(result){
			const image = ImagePicker.openPicker({
				mediaType: 'photo',
				multiple: true,
				includeBase64: true,
				forceJpg: true,
			})
			return image		
		}
		else {
			Alert.alert('카메라 권한이 없습니다.')
		}
	})
};
