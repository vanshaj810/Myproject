import { Button, Form } from 'react-bootstrap';
import React, { Component } from 'react'
import './Painting.css';

export default class Painting extends Component {
    submit(e) {
        e.preventDefault()

    }
    render() {
        return (
            <>
            <div id="paintingouterdiv">
                <div id="paintingdiv">
                    <Form>
                    <h1 id="paintingh1">Art Gallery!</h1>
                        <h3 id="paintingh3">Painting Of The Month.</h3>
                        <Form.Group>
                            <Form.Label className="paintinglabel">Name of the Painting</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of the Painting" className="paintingtext" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="paintinglabel">Description of the Painting</Form.Label>
                            <Form.Control as="textarea" rows={2}/>
                            <Form.Group>
                                <br />
                            <Form.File className="paintinglabel" required Name="painting" label="Painting" id="painting" feedbackTooltip />
                        </Form.Group>
                            <br />
                            <Form.Label className="paintinglabel">Type the Artist Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of the Artist" className="paintingtext" />

                        </Form.Group>
                        <Button variant="primary" type="submit" className="paintingbutton" onClick={(e) => this.submit(e)} >
                            OK
                        </Button>
                    </Form>
                </div>
            </div>
            </>
        )
    }
}
