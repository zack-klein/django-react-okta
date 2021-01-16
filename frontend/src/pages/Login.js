import { Button, Container, Header } from "semantic-ui-react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { loginUser } from '../actions/userActions'


export function Login({ token, loginUser }) {

	if (token) return <Redirect to="/" />

	return (
		<Container text style={{ marginTop: "3em" }}>
			<Header>
				Login
			</Header>
			<Button color="blue" basic content="Login" onClick={loginUser} />
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
    loginUser: () => dispatch(loginUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);