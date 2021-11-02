import { gql } from "@apollo/client";


export const INSERT_SCHEDULE = gql`
	mutation saveSchedule( $ScheduleInput : ScheduleInput!){
		saveSchedule( ScheduleInput : $ScheduleInput){
			id
		}
	}
`

export const ADD_SOCIAL_USER = gql`
mutation saveSotongUser( $email: String!, $password: String!, $nick_name: String, $name : String, $phone: String, $social_token: String, $modify_date : DateTime){
  saveSotongUser( email : $email, password : $password, nick_name : $nick_name, name : $name, phone : $phone, social_token : $social_token, modify_date : $modify_date)
}
`;