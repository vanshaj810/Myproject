import { Button, Form } from 'react-bootstrap';
import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
            nameError: "",
            passwordError: ""
        }
    }
    valid() {
        if (!this.state.name.includes("@") && this.state.password.length < 5) {
            this.setState({
                nameError: "Invalid Email", passwordError: "Password length should be more than 5"
            })
        }
        else if (!this.state.name.includes("@")) {
            this.setState({
                nameError: "Invalid Email"
            })
        }
        else if (this.state.password.length < 5) {
            this.setState({
                passwordError: "Password length should be more than 5"
            })
        }
        // else if(this.state.name.includes("@") && this.state.password.length < 5){
        //     this.setState({
        //         nameError: "", passwordError: ""
        //     })
        // }
        else {
            return true
        }
    }

    submit(e) {
    e.preventDefault()
        this.setState({
            nameError: "", passwordError: ""
        })

        if (this.valid()) {
            alert("form has been submitted")
        }
    }

    render() {
        return (
            <div id="outerdivv">
            <div id="logindiv">
                <Form>
                    <h1 id="loginh">Welcome to ART GALLERY..!!</h1> <br />
                    <Form.Group controlId="formBasicEmail" className="loginformgroup">
                        <Form.Label className="loginlabel" >Email address</Form.Label>

                        <Form.Control type="Email" placeholder="Enter email" className="logintext" onChange={(event) => { this.setState({ name: event?.target.value }) }} />
                        <p style={{ color: "red", fontSize: "14px" }}>{this.state.nameError}</p>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="loginformgroup" >
                        <Form.Label className="loginlabel">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="logintext" onChange={(event) => { this.setState({ password: event?.target.value }) }} />
                        <p style={{ color: "red", fontSize: "14px" }}>{this.state.passwordError}</p>
                        <br />
                        <Button variant="primary" type="submit" className="loginbutton" onClick={(e) => this.submit(e)}>
                            Submit
                        </Button>

                    </Form.Group>


                </Form>
            </div>
            </div>
        )
    }
}

