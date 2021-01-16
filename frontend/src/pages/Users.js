import { useEffect } from "react";
import { Button, Container, Header, List } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import BackButton from "../components/BackButton";
import { getUsers } from "../actions/userActions";

export function Users({ token, users = [], getUserList }) {
  let userList = [];

  users.map((u) => {
    userList.push(<List.Item key={u.email}>{u.email}</List.Item>);
  });

  useEffect(() => {
    getUserList(token);
  }, []);

  return (
    <Container text style={{ marginTop: "3em" }}>
      <Header>Users</Header>
      <BackButton />
      <List>{userList}</List>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: async (token) => dispatch(getUsers(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
