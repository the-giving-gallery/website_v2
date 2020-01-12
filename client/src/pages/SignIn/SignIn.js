import React from "react";
import SignInForm from "../../components/SignIn/SignInForm"
import RegisterFrom from "../../components/RegisterForm/RegisterForm"
import { Container, Row, Col } from "reactstrap"
import "./SignIn.css"


export default class SignIn extends React.Component {

  state = {
    isLogin: true,
    isRegister: false
  }

  handleSignIn = () => {
    this.setState({
      isLogin: true,
      isRegister: false
    })
  }

  handleRegister = () => {
    this.setState({
      isLogin: false,
      isRegister: true
    })
  }

  render() {
    return (
      <Container>
        <Row id="choiceHeader">
          <Col onClick={this.handleSignIn}>
            <h4 className={"selectHeader " + (this.state.isLogin ? "selected" : "")}>Sign In</h4>
          </Col>
          <Col onClick={this.handleRegister}>
            <h4 className={"selectHeader " + (this.state.isRegister ? "selected" : "")}>Register</h4>
          </Col>
        </Row>
        <Row>
          {this.state.isLogin === true ? <SignInForm /> : <RegisterFrom></RegisterFrom>}
        </Row>
      </Container>
    );
  }

};