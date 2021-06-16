import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import './Artwork.css';

export default class Artwork extends Component {
    render() {
        return (
            <div id="artworkouterdiv">
                <div id="artworkdiv">
                    <Form>
                        <h1 id="artworkh1">Art Gallery!</h1>
                        <h3 id="artworkh3">Artwork Upload.</h3>
                        <Form.Group>
                            <Form.Label className="artworklabel">Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title of the artwork" className="artworktext" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="artworklabel">Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price of the artwork" className="artworktext" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="artworklabel">Description</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <Form.Group>
                        
                            <Form.File className="artworklabel" required Name="uploadartwork" label="Copyright Image" id="uploadartwork" feedbackTooltip />
                        </Form.Group>
                        <Form.Group>
                          
                            <Form.File className="artworklabel" required Name="uploadartwork" label="Upload artwork" id="uploaartworkartwork" feedbackTooltip />
                            <br /> <Form.File className="artworklabel" required Name="uploadaartwork" feedbackTooltip />
                            <br /><Form.File className="artworklabel" required Name="uploadaaartwork" feedbackTooltip />
                            <br /><Form.File className="artworklabel" required Name="uploadaaaaartwork" feedbackTooltip />

                        </Form.Group>

                    </Form>
                </div>
            </div>
        )
    }
}
