import logo from './wildcat.png';
import './App.css';
import StandardCalendar from './components/calendar';
import Checklist from './components/checklist';
//import Form from './components/neweventform'
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'



function App() {

  const [formShow, setFormShow] = useState(false);
  const [editFormShow, setEditShow] = useState(false);
  const [eventDetailsShow1, setDetailShow1] = useState(false);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="CWU" />
          <h1 className="App-Title">
            CWU Rehearsal Calendar
          </h1>
        </header>

        <div className="newEvent">
          <div className="newEvent">
            <Button onClick={() => setFormShow(true)}>Add new event</Button>
            <Modal
              size="lg"
              show={formShow}
              onHide={() => setFormShow(false)}
            >
              <Modal.Header closeButton>
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
                  <Form.Control type="text" />
                  <Form.Label>Details: </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button onClick={() => setFormShow(false)}>Add</Button>
              </Modal.Body>

            </Modal>
          </div>

        </div>
        <div className="float-container">
          <div className="float-child1">
            <Container fluid >
              <Row>
                <Col style={{ fontSize: 45, textAlign: 'center', backgroundColor: '#AB0032' }}>FEB 14 - 20</Col>
              </Row>
              <Row style={{ borderStyle: 'solid' }}>
                <Col sm={1}>
                  <Row style={{ borderBottom: 'solid', textDecoration: 'underline' }}>Time</Row>
                  <Row style={{ borderBottom: 'solid' }}>3:00</Row>
                  <Row style={{ borderBottom: 'solid' }}>3:30</Row>
                  <Row style={{ borderBottom: 'solid' }}>4:00</Row>
                  <Row style={{ borderBottom: 'solid' }}>4:30</Row>
                  <Row style={{ borderBottom: 'solid' }}>5:00</Row>
                  <Row style={{ borderBottom: 'solid' }}>5:30</Row>
                  <Row style={{ borderBottom: 'solid' }}>6:00</Row>
                  <Row style={{ borderBottom: 'solid' }}>6:30</Row>
                  <Row style={{ borderBottom: 'solid' }}>7:00</Row>
                  <Row style={{ borderBottom: 'solid' }}>7:30</Row>
                  <Row style={{ borderBottom: 'solid' }}>8:00</Row>
                  <Row style={{ borderBottom: 'solid' }}>8:30</Row>
                  <Row style={{ borderBottom: 'solid' }}>9:00</Row>
                  <Row >9:30</Row>
                </Col>
                <Col style={{ borderLeft: 'solid' }}>
                  <Row style={{ textDecoration: 'underline' }}>Sunday 14</Row>

                </Col>
                <Col style={{ borderLeft: 'solid' }}>
                  <Row style={{ textDecoration: 'underline' }}>Monday 15</Row>
                  <Row style={{ paddingLeft: 5 }} className="Orange"><Button style={{ height: 110, width: 175, backgroundColor: 'orange' }} onClick={() => setDetailShow1(true)}>3:00-5:00</Button></Row>
                </Col>
                <Col style={{ borderLeft: 'solid' }}>
                  <Row style={{ textDecoration: 'underline' }}>Tuesday 16</Row>
                  <Row style={{ paddingLeft: 5, paddingTop: 100 }} className="Orange"><Button style={{ height: 110, width: 175, backgroundColor: 'orange' }}>5:00-7:00</Button></Row>
                </Col>
                <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Wednesday 17</Col>
                <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Thursday 18</Col>
                <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Friday 19</Col>
                <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Saturday 20</Col>
              </Row>

            </Container>
          </div>
          <div className="float-child2">
            <Checklist />
          </div>
        </div>

      </div>
      <div>
        <Modal
          size="lg"
          show={editFormShow}
          onHide={() => setEditShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Edit Event
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
              <Form.Control type="text" />
              <Form.Label>Details: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button onClick={() => setEditShow(false)}>Save</Button>
          </Modal.Body>

        </Modal>

      </div>
      <div style={{ marginTop: 500 }} >
        <Container className={setDetailShow1}>
          <Form style={{ backgroundColor: "orange", borderRadius:25, width:900}}>
            <Form.Group style={{paddingLeft: 35}}>
              <Form.Row style={{ paddingTop: 5 }}>
                <Form.Label>Date: </Form.Label>
                <Form.Text style={{ paddingLeft: 60 }}> 2/15/21</Form.Text>
                <Form.Text><a onClick={() => setEditShow(true)} style={{ textDecoration: "underline", paddingLeft: 650 }}>Edit</a></Form.Text>
              </Form.Row>
              <Form.Row style={{ paddingTop: 5 }}>
                <Form.Label>Start Time: </Form.Label>
                <Form.Text style={{ paddingLeft: 20 }}> 3:00 </Form.Text>
              </Form.Row>
              <Form.Row style={{paddingTop: 5 }}>
                <Form.Label>End Time: </Form.Label>
                <Form.Text style={{ paddingLeft: 25 }}> 5:00 </Form.Text>
              </Form.Row>
              <Form.Row style={{ paddingTop: 5 }}>
                <Form.Label>Play:  </Form.Label>
                <Form.Text style={{ paddingLeft: 60 }}> Play 1 </Form.Text>
              </Form.Row>
              <Form.Row style={{  paddingTop: 5 }}>
                <Form.Label>People: </Form.Label>
                <Form.Text style={{ paddingLeft: 40 }}>FILLER </Form.Text>
              </Form.Row>
              <Form.Row style={{ paddingTop: 5 }}>
                <Form.Label>Details: </Form.Label>
                <Form.Text style={{ paddingLeft: 39 }}> FILLER </Form.Text>
              </Form.Row>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
}


export default App;


