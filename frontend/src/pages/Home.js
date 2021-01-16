import { Button, Container, Header } from "semantic-ui-react"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { logoutUser } from "../actions/userActions"


export function Home({ token, logout }) {

	if (!token) return <Redirect to="/login" />

	return (
		<Container text style={{ marginTop: "3em" }}>
			<Header>
				Home
			</Header>

			<Container>
				<Button.Group>
					<Button content="Profile" color="blue" as={Link} to="/profile" />
					<Button content="Users" color="blue" as={Link} to="/users" />
				</Button.Group>
			</Container>

			<Container style={{ marginTop: "1em" }}>
				<Button content="Logout" color="red" onClick={logout} basic />
			</Container>
		</Container>
	)

}


const mapStateToProps = (state) => {
	return {
		token: state.userReducer.token
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logoutUser())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)