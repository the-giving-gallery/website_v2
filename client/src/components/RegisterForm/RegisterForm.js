import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Row
} from 'reactstrap';
import './RegisterForm.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
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
            name: "",

        })
    }



    render() {
        return (
            <>
                <Container id="container">
                    <Row id="registerForm">
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
                </Container>
            </>
        );
    }
}

export default RegisterForm;