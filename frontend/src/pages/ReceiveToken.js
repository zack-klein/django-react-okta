import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { setToken } from "../actions/userActions"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function ReceiveToken({ setUserToken }) {
	const query = useQuery();

	useEffect(() => {
		setUserToken(query.get("token"));
	})

	return (<Redirect to="/" />)

}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserToken: (token) => dispatch(setToken(token))
  }
}

export default connect(null, mapDispatchToProps)(ReceiveToken);