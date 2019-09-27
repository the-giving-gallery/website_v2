import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Row
} from 'reactstrap';
import './SignInForm.css';
import axios from "axios"

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoginOpen: true,
            isRegisterOpen: false
        }
    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: "",
            password: "",
        })
        axios.get("/api/test/GET")
            .then(res => {
                console.log(res.data)
                console.log("success")
            })
    }
    handleSignIn = () => {
        this.setState({
            isLoginOpen: true,
            isRegisterOpen: false
        })
        console.log((this.state))
    }
    handleRegister = () => {
        this.setState({
            isLoginOpen: false,
            isRegisterOpen: true
        })
        console.log((this.state))

    }


    render() {
        return (
            <>
                <Container id="container">
                    <Row id="signInForm">
                        <Form >
                            <Col>
                                <FormGroup >
                                    <Label id="emailGroup">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="youremail@email.com"
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup >
                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="********"
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Button onClick={this.handleSubmit} className="m-4">Submit</Button>
                        </Form>
                    </Row>
                </Container>
            </>
        );
    }
}

export default SignInForm;