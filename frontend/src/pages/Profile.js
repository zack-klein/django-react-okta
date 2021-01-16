import { useEffect } from "react"
import { connect } from "react-redux"
import { Container, Header, List } from "semantic-ui-react"
import { getUser } from "../actions/userActions"

import BackButton from "../components/BackButton"


export function Profile({ token = null, user = {}, getUserObj = () => null }) {

	useEffect(() => {
		getUserObj(token)
	}, [])

	return (
		<Container text style={{ marginTop: "3em" }}>
			<Header>
				Profile
			</Header>
			<BackButton />
			<List>
				<List.Item>Username: {user.username}</List.Item>
				<List.Item>Email: {user.email}</List.Item>
			</List>
			
		</Container>
	)

}


const mapStateToProps = (state) => {
	return {
		token: state.userReducer.token,
		user: state.userReducer.user
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserObj: (token) => dispatch(getUser(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);