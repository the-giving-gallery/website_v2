import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Row
} from 'reactstrap';
import './SignInForm.css';
import axios from "axios"

class SignInForm extends React.Component {

    state = {
        email: "",
        password: "",
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/user/signin", {
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                console.log(res.data)
                this.setState({
                    email: "",
                    password: "",
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        return (
            <Container id="container">
                <Row id="signInForm">
                    <Form action="/login" method="post">
                        <Col>
                            <FormGroup >
                                <Label id="emailGroup">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
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
                                    placeholder="Password"
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                        </Col>
                        <Button onClick={this.handleSubmit} className="m-4">Sign In</Button>
                    </Form>
                </Row>
            </Container>
        );
    }

}

export default SignInForm;