import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class NewEventForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>Add new event</Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton >
                        <Modal.Title>
                            New Event
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Date: </Form.Label>
                            <Form.Control type="date" name="date" placeholder="date" />
                            <Form.Label>Start Time: </Form.Label>
                            <Form.Control type="time" />
                            <Form.Label>End Time: </Form.Label>
                            <Form.Control type="time" />
                            <Form.Label>Select Play: </Form.Label>
                            <Form.Control as="select" size="sm" custom>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>Add new play</option>
                            </Form.Control>
                            <Form.Label>Add people: </Form.Label>
                            <Form.Control as="textarea" rows={2} />
                            <Form.Label>Details: </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default NewEventForm;