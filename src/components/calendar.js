import React, { useState } from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
//import 'react-week-calendar/dist/style.css';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import ReactDom from 'react-dom';
import Form from 'react-bootstrap/form'
import Modal from 'react-bootstrap/Modal'

class Calendar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      isHidden: true,
    };
  }
  
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <>
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
              <Row style={{ paddingLeft: 5 }} className="Orange"><Button style={{ height: 110, width: 175, backgroundColor: 'orange' }} onClick={this.toggleHidden.bind(this)} >3:00-5:00</Button></Row>
            </Col>
            <Col style={{ borderLeft: 'solid' }}>
              <Row style={{ textDecoration: 'underline' }}>Tuesday 16</Row>
              <Row style={{ paddingLeft: 5, paddingTop: 100 }} className="Orange"><Button style={{ height: 110, width: 175, backgroundColor: 'orange' }}>5:00-7:00</Button> </Row>
            </Col>
            <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Wednesday 17</Col>
            <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Thursday 18</Col>
            <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Friday 19</Col>
            <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Saturday 20</Col>
          </Row>

        </Container>
        
        {!this.state.isHidden && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "orange", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/15/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden.bind(this)} style={{paddingLeft: 30}}>X</a></Form.Text>        
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 3:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 5:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Play:  </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> Play 1 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
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
         }
        

        <Modal show={this.state.show} onHide={this.handleClose} >
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
             <Button onClick={this.handleClose}>Save</Button>
           </Modal.Body>
         </Modal>

      </>
    );
  }
}

const PlayDetails1 = () => (
  <>
  <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "orange", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/15/21</Form.Text>
                  
                  
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 3:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 5:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Play:  </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> Play 1 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
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
)

export default Calendar;
