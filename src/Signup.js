import { Button, Form } from 'react-bootstrap';
import React, { Component } from 'react'
import './Signup.css';

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            Email: "",
            password: "",
            Name: "",
            EmailError: "",
            passwordError: "",
            NameError: "",


        }
    }
    valid() {
        debugger;
        console.log(this.state.Name, 'check', this.state.Name.match(/^[a-zA-Z]+$/))
        let valid=true;
        if (!this.state.Email.includes("@") && this.state.password.length < 5) {
            valid=false;
            this.setState({
                EmailError: "Invalid Email", passwordError: "Password length should be more than 5"
            })
        }
         if (!this.state.Name.match(/^[a-zA-Z]+$/)) {
            
            valid=false;
            this.setState({
                NameError: "Only Letters"
            })
        }
        if (!this.state.Name.includes("@")) {
            valid=false;
            this.setState({
                EmailError: "Invalid Email"
            })
        }
        if (this.state.password.length < 5) {
            valid=false;
            this.setState({
                passwordError: "Password length should be more than 5"
            })
        }
        // else if(this.state.Name.includes("@") && this.state.password.length < 5){
        //     this.setState({
        //         NameError: "", passwordError: ""
        //     })
        // }
       return valid;
       
    }

    submit(e) {
        e.preventDefault()
        this.setState({
            EmailError: "", 
            passwordError: "",NameError:""
        })

        if (this.valid()) {
            alert("form has been submitted")
        }
    }
    render() {
        console.log(this.state);
        return (
            <div id="outerdiv">

                <div id="signupdiv">
                    <Form>
                        <h1 id="signuph1">Art Gallery!</h1>
                        <h3 id="signuph3">Sign up to see your Art.</h3>
                        
                        <Form.Group>
                            <Form.Label className="signuplabel">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" className="signuptext" onChange={(event) => { this.setState({ Name: event?.target.value }) }} />
                            <p style={{ color: "red", fontSize: "14px" }}>{this.state.NameError}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="signuplabel">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" className="signuptext" onChange={(event) => { this.setState({ Email: event?.target.value }) }} />
                            <p style={{ color: "red", fontSize: "14px" }}>{this.state.EmailError}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" >
                            <Form.Label className="signuplabel">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className="signuptext" onChange={(event) => { this.setState({ password: event?.target.value }) }} />
                            <p style={{ color: "red", fontSize: "14px" }}>{this.state.passwordError}</p>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className="signuplabel">Types of Art</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.File className="signuplabel" required Name="profilepic" label="Profile picture" id="signupprofilepic" feedbackTooltip />
                        </Form.Group>
                        <Form.Group>
                            <Form.File className="signuplabel" required Name="file" label="Identity Proof" id="validationFormik107" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="signupbutton" onClick={(e) => this.submit(e)} >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div >
        )
    }
}
