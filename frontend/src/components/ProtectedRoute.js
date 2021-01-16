import { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import { checkToken } from "../actions/userActions";

export function ProtectedRoute({ token, checkTokenValidity, component, path }) {
  useEffect(() => {
    checkTokenValidity(token);
  }, []);

  if (!token) {
    return <Redirect to="/login" />;
  } else {
    return <Route exact component={component} path={path} />;
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkTokenValidity: (token) => dispatch(checkToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
