import React from "react";
import SignInForm from "../../components/SignIn/SignInForm"
import RegisterFrom from "../../components/RegisterForm/RegisterForm"
import { Container, Row, Col } from "reactstrap"
import "./SignIn.css"

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    }
  }
  handleSignIn = () => {
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false
    })
  }
  handleRegister = () => {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true
    })
  }
  render() {

    return (
      <>
        <Container>
          <Row id="choiceHeader">
            <Col onClick={this.handleSignIn}>
              <h2 className="header">Sign In</h2>
            </Col>
            <Col onClick={this.handleRegister}>
              <h2 className="header">Register</h2>
            </Col>
          </Row>
          {this.state.isLoginOpen === true ? <SignInForm/> : <RegisterFrom></RegisterFrom>}
        </Container>
      </>
    );
  }
};