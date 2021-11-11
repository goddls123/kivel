import { gql } from "@apollo/client";


export const INSERT_SCHEDULE = gql`
	mutation saveSchedule( $ScheduleInput : ScheduleInput!){
		saveSchedule( ScheduleInput : $ScheduleInput){
			id
		}
	}
`

export const USER_LOGIN = gql`
	mutation userLogin {
		userLogin {
			userEmail
		}
	}`

export const GET_SCHEDULE = gql`
	query {
		schedules{
			id
			title
			scheduleDate
			startTime
			endTime
			repeatCycle
			repeatDay
			period
			therapistId
			location
			latitude
			longitude
			memo
			notificationTime
		}
	}
`
export const UPLOAD_FILE = gql`
mutation uploadFile($file: [Upload!]!) {
  uploadFile(file: $file) 
}
`;