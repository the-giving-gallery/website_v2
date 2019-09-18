import React from "react";
import SignInForm from "../../components/SignIn/SignInForm"
import RegisterFrom from "../../components/RegisterForm/RegisterForm"
import { Container, Row, Col } from "reactstrap"
import "./SignIn.css"

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
      isRegisterOpen: true
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
              <h4 className={"header " + (this.state.isLoginOpen ? "selectedHeader" : "")}>Sign In</h4>
            </Col>
            <Col onClick={this.handleRegister}>
              <h4 className={"header " + (this.state.isRegisterOpen ? "selectedHeader" : "")}>Register</h4>
            </Col>
          </Row>
          <Row>

            {this.state.isLoginOpen === true ? <SignInForm /> : <RegisterFrom></RegisterFrom>}
          </Row>
        </Container>
      </>
    );
  }
};