import { ReactNativeFile } from 'apollo-upload-client';
import { Alert, PermissionsAndroid, Platform } from 'react-native'
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';


export const requestCameraPermission = async () => {
	if(Platform.OS === 'android') { 
		const result : any = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
		return result === PermissionsAndroid.RESULTS.GRANTED || result === true
	}
	return true;
}

export async function cameraOpen() {
	requestCameraPermission().then((result) => {
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
	requestCameraPermission().then(result => {
		if(result){
			const image = ImagePicker.openPicker({
				mediaType: 'photo',
				multiple: false,
				includeBase64: true,
				forceJpg: true,
			}).then((image: any) => {
				let files: ReactNativeFile[] = [];
				image.map((e: any) => {
					const file = new ReactNativeFile({
					uri: e.path,
					type: e.mime,
					name: 'test.jpg',
				});
				files.push(file);
			  });
			  return files
			});

			return null

		}
		else {
			Alert.alert('카메라 권한이 없습니다.')
		}
	})
};

export async function imagePickMultiple() {
	let files: ReactNativeFile[] = [];
	requestCameraPermission().then(result => {
		if(result){
			const image = ImagePicker.openPicker({
				mediaType: 'photo',
				multiple: true,
				includeBase64: true,
				forceJpg: true,
			}).then((image: any) => {
				// let files: ReactNativeFile[] = [];
				image.map((e: any) => {
					const file = new ReactNativeFile({
					uri: e.path,
					type: e.mime,
					name: 'test.jpg',
				});
				files.push(file);
			  });
			  return files
			});
			return null
		}
		else {
			Alert.alert('카메라 권한이 없습니다.')
		}
		return null
	})
	return files
};
