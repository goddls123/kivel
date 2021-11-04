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