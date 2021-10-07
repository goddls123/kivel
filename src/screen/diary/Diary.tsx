import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Divider} from '../common/divider';
import {SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import {diary} from '../../types/DiaryTypes';
import ImageModal from 'react-native-image-modal';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { RouteProp } from '@react-navigation/native';
import { getDateYMD } from '../common/service/dateService';
const dummyData: diary = {
  note_id: 1,
  date: new Date(),
  title: '꽃이 피던 날',
  share_YN: true,
  content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
  images: [
    'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
    'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
    'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
  ],
  tag: ['첫 걸음', '현둥'],
};

interface diaryProps {
  // navigation : StackNavigationProp<stackInterface,'Diary'>;
  route : RouteProp<stackInterface,'Diary'>;
}
export function Diary(props: diaryProps) {
  
  return (
    <View style={styles.container}>
      
      {/* 제목 */}
      <View style={styles.headerView}>
        <View style={styles.headerTop}>
          <Text style={{fontSize: 20}}>{props.route.params.title}</Text>
          <TouchableOpacity style={[styles.button, {alignSelf: 'flex-end'}]}>
            <Text style={{fontSize: 15}}> 수정 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerBottom}>
          <Text style={{fontSize: 15}}>
            {getDateYMD(props.route.params.date,'.')}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 15}}> 공유 </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* 제목 */}


      <Divider height={5} color="#E5E5E5" />

      {/* 본문 */}
      <View style={styles.mainText}>
        
        <ScrollView>

          {/* 텍스트 */}
          <Text style={{fontSize: 15, marginBottom: 20}}>
            {props.route.params.content}
          </Text>

          {/* 사진 */}
          <ScrollView style={{flexDirection: 'row'}} horizontal >
          {
            props.route.params.images?.map((imageUri, id) => {
              return(
                <ImageModal                 
                  resizeMode='contain'
                  modalImageResizeMode='contain'
                  key={id}
                  source={{uri: imageUri}}
                  style={styles.imageStyle}
                  ></ImageModal>
              )
            })
          }
          </ScrollView>

        </ScrollView>
      </View>
      {/* 본문 */}

      <Divider height={3} color="#E5E5E5" />

      {/* 태그 */}
      <View style={styles.tagContainer}>
        <View style={{flexDirection: 'row'}}>
          {
            props.route.params.tag?.map((tag, id) => {
              return(
                <View key={id} style={styles.tagStyle}>
                  <Text style={{color: '#C4C4C4'}}> # {tag}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
      {/* 태그 */}


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {flex: 2, margin: 15},
  headerTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBottom: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  button: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  mainText: {
    flex: 10, 
    justifyContent: 'space-between', 
    margin: 20
  },
  imageStyle: {
    marginRight: 15,
    height: SIZE_HEIGHT / 5,
    width: SIZE_HEIGHT / 5,
  },
  tagContainer: {flex: 2},
  tagStyle: {
    marginLeft: 20,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
