import { schedule } from "../../types/calendarTypes";
import { diary } from "../../types/DiaryTypes";

export const schedule_data : schedule[] = [
{ schedule_id: 1
, user_id: 1
, schedule_date: "2021-10-30"
, start_time: "09:30:00"
, end_time: "10:30:00"
, notify_time: "01:00:00"
, repeat_cycle: "D"
, title: "운동치료"
, location: "와이아동발달연구소"
, memo: "끝나고 장보기!"
, color: "orange"
},
{ schedule_id: 2
, user_id: 1
, schedule_date: "2021-11-05"
, start_time: "13:30:00"
, end_time: "15:30:00"
, notify_time: "00:30:00"
, repeat_cycle: "D"
, title: "작업치료"
, location: "제트아동발달연구소"
, memo: "끝나고 놀이공원!"
, color: "blue"
},
{ schedule_id: 3
, user_id: 1
, schedule_date: "0101000"
, start_time: "06:10:30"
, end_time: "08:10:30"
, notify_time: "00:15:00"
, repeat_cycle: "W"
, title: "음악치료"
, location: "엑스아동발달연구소"
, memo: "끝나고 할머니네!"
, color: "red"
},
{ schedule_id: 4
, user_id: 1
, schedule_date: "5"
, start_time: "10:00:00"
, end_time: "11:30:00"
, notify_time: "02:00:00"
, repeat_cycle: "M"
, title: "미술치료"
, location: "에이아동발달연구소"
, memo: "끝나고 장!"
, color: "black"
},
{ schedule_id: 5
, user_id: 1
, schedule_date: "20"
, start_time: "10:00:00"
, end_time: "11:30:00"
, notify_time: "02:00:00"
, repeat_cycle: "M"
, title: "미술치료"
, location: "에이아동발달연구소"
, memo: "끝나고 장!"
, color: "black"
},
{ schedule_id: 6
, user_id: 1
, schedule_date: "02-17"
, start_time: "13:30:00"
, end_time: "15:00:00"
, notify_time: "04:00:10"
, repeat_cycle: "Y"
, title: "검사받기"
, location: "서울아산병원"
, memo: "매년 2월 받는 검사!"
, color: "yellow"
},
{ schedule_id: 7
, user_id: 1
, schedule_date: "0111000"
, start_time: "05:30:00"
, end_time: "06:00:00"
, notify_time: "01:00:00"
, repeat_cycle: "W"
, title: "소운동치료"
, location: "삐아동발달연구소"
, memo: "ㅎㅇ"
, color: "green"
},
{ schedule_id: 8
, user_id: 1
, schedule_date: "0000010"
, start_time: "17:30:00"
, end_time: "18:30:00"
, notify_time: "09:00:00"
, repeat_cycle: "W"
, title: "금요 모임"
, location: "은평보건소"
, memo: "ㅎㅇㅎㅇ"
, color: "purple"
},
{ schedule_id: 9
, user_id: 1
, schedule_date: "1"
, start_time: "16:30:00"
, end_time: "17:00:00"
, notify_time: "01:00:00"
, repeat_cycle: "M"
, title: "월초 모임"
, location: "은평보건소"
, memo: "히히"
, color: "purple"
},
{ schedule_id: 10
, user_id: 1
, schedule_date: "0000001"
, start_time: "15:30:00"
, end_time: "16:00:00"
, notify_time: "06:00:00"
, repeat_cycle: "W"
, title: "토요세미나"
, location: "피식대학"
, memo: "히히"
, color: "gray"
}
]

export const dummyData: diary[] = [
	{
		note_id: 1,
		date: new Date('2021-09-18'),
		title: '꽃이 피던 날',
		share_YN: true,
		content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
		images: [
		'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
		'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
		'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
		],
		tag: ['첫 걸음', '현둥'],
	},
	{
		note_id: 2,
		date: new Date('2021-09-11'),
		title: '드디어?!',
		share_YN: true,
		content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
		images: [
		'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
		'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
		'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
		],
		// tag: ['첫 걸음', '현둥'],
	},
	{
		note_id: 3,
		date: new Date('2021-09-09'),
		title: '말랑카우 먹은 날',
		share_YN: true,
		content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
		images: [
		'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
		'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
		'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
		],
		tag: ['첫 걸음', '현둥','어버버버ㅓㅂ'],
	},
	{
		note_id: 4,
		date: new Date('2021-09-01'),
		title: '뚱빈 보고시퍼',
		share_YN: true,
		content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
		images: [
		'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
		'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
		'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
		],
	},


];