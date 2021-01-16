import { Redirect, Route } from "react-router-dom"
import { connect } from "react-redux"


export function ProtectedRoute({ token, component, path }) {
	if (!token) {
		return <Redirect to="/login" />
	} else {
		return <Route exact component={component} path={path} />
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.userReducer.token
	}
}

export default connect(mapStateToProps, null)(ProtectedRoute)