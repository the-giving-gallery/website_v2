import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Row
} from 'reactstrap';
import './RegisterForm.css';
import axios from "axios";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const route = "/api/user/register";
        axios.post(route, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        })
            .then(function (res) {
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                })
            }).catch(function (error) {
                console.log('this was an error registering ', error);
            })
    }



    render() {
        return (
            <>
                <Container id="container">
                    <div className="registerForm">

                        <Row id="rowHeader" >
                            <h5 id="createHeader">
                                Create Account
                        </h5>
                        </Row>
                        <hr></hr>
                        <Row >
                            <Form >
                                <Col>
                                    <FormGroup id="nameGroup">
                                        <Label >First Name</Label>
                                        <Input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="First Name"
                                            onChange={this.handleInputChange}
                                        />
                                        <Label >Last Name</Label>
                                        <Input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Last Name"
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
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
                    </div>
                </Container>
            </>
        );
    }
}

export default RegisterForm;