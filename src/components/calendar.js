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
      isHidden1: true,
      isHidden2: true,
      isHidden3: true,
      isHidden4: true,
      isHidden5: true,
      isHidden6: true,
      isHidden7: true,
      isHidden8: true,
      isHidden9: true,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  toggleHidden1() {
    this.setState({
      isHidden1: !this.state.isHidden1
    })
  }
  toggleHidden2() {
    this.setState({
      isHidden2: !this.state.isHidden2
    })
  }
  toggleHidden3() {
    this.setState({
      isHidden3: !this.state.isHidden3
    })
  }
  toggleHidden4() {
    this.setState({
      isHidden4: !this.state.isHidden4
    })
  }
  toggleHidden5() {
    this.setState({
      isHidden5: !this.state.isHidden5
    })
  }
  toggleHidden6() {
    this.setState({
      isHidden6: !this.state.isHidden6
    })
  }
  toggleHidden7() {
    this.setState({
      isHidden7: !this.state.isHidden7
    })
  }
  toggleHidden8() {
    this.setState({
      isHidden8: !this.state.isHidden8
    })
  }
  toggleHidden9() {
    this.setState({
      isHidden9: !this.state.isHidden9
    })
  }

  render() {
    return (
      <>
        <Container fluid >
          <Row>
            <Col style={{ fontSize: 45, textAlign: 'center', backgroundColor: '#AB0032', borderTopRightRadius: 25, borderTopLeftRadius: 25}}>FEB 14 - 20</Col>
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
              <Row style={{ paddingLeft: 5 }} className="Orange"><Button style={{ height: 110, width: 175, backgroundColor: '#ffa640' }} onClick={this.toggleHidden1.bind(this)} >3:00-5:00</Button></Row>
              <Row style={{ paddingLeft: 5, paddingTop: 75 }} className="Blue"><Button style={{ height: 75, width: 175, backgroundColor: '#5f6fff' }} onClick={this.toggleHidden3.bind(this)} >6:30-8:00</Button></Row>
            </Col>
            <Col style={{ borderLeft: 'solid' }}>
              <Row style={{ textDecoration: 'underline' }}>Tuesday 16</Row>
              <Row style={{ paddingLeft: 5, paddingTop: 100 }} className="Orange"><Button style={{ height: 110, width: 175, backgroundColor: '#ffa640' }} onClick={this.toggleHidden2.bind(this)}>5:00-7:00</Button> </Row>
              <Row style={{ paddingLeft: 5, paddingTop: 65 }} className="Red"><Button style={{ height: 75, width: 175, backgroundColor: '#ff4b4b' }} onClick={this.toggleHidden4.bind(this)} >8:00-9:00</Button></Row>
            </Col>
            <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Wednesday 17
            <Row style={{ paddingLeft: 5, paddingTop: 15 }} className="Green"><Button style={{ height: 55, width: 175, backgroundColor: '#50c54c' }} onClick={this.toggleHidden5.bind(this)} >3:15-4:00</Button></Row>
              <Row style={{ paddingLeft: 5, paddingTop: 213 }} className="Red"><Button style={{ height: 65, width: 175, backgroundColor: '#5f6fff' }} onClick={this.toggleHidden6.bind(this)} >8:15-9:00</Button></Row>

            </Col>
            <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Thursday 18
            <Row style={{ paddingLeft: 5, paddingTop: 60 }} className="Red"><Button style={{ height: 100, width: 175, backgroundColor: '#ff4b4b' }} onClick={this.toggleHidden7.bind(this)} >4:15-6:00</Button></Row>
              <Row style={{ paddingLeft: 5, paddingTop: 70 }} className="Green"><Button style={{ height: 85, width: 175, backgroundColor: '#50c54c' }} onClick={this.toggleHidden8.bind(this)} >7:00-8:45</Button></Row>

            </Col>
            <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Friday 19
            <Row style={{ paddingLeft: 5, paddingTop: 75 }} className="Blue"><Button style={{ height: 125, width: 175, backgroundColor: '#5f6fff' }} onClick={this.toggleHidden9.bind(this)} >4:30-7:00</Button></Row>
            </Col>

            <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Saturday 20</Col>
          </Row>

        </Container>

        {!this.state.isHidden1 && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "#ffa640", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/15/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden1.bind(this)} style={{ paddingLeft: 30 }}>X</a></Form.Text>
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
        {!this.state.isHidden2 && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "#ffa640", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/16/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden2.bind(this)} style={{ paddingLeft: 30 }}>X</a></Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 5:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 7:00 </Form.Text>
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
        {!this.state.isHidden3 && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "#5f6fff", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/15/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden3.bind(this)} style={{ paddingLeft: 30 }}>X</a></Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 6:30 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 8:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Play:  </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> Play 2 </Form.Text>
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
        {!this.state.isHidden4 && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "#ff4b4b", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/16/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden4.bind(this)} style={{ paddingLeft: 30 }}>X</a></Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 8:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 9:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Play:  </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> Play 3 </Form.Text>
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
        {!this.state.isHidden5 && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "#50c54c", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/17/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden5.bind(this)} style={{ paddingLeft: 30 }}>X</a></Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 3:15 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 4:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Play:  </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> Play 4 </Form.Text>
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
        {!this.state.isHidden6 && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "#5f6fff", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/17/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden6.bind(this)} style={{ paddingLeft: 30 }}>X</a></Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 8:15 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 9:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Play:  </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> Play 2 </Form.Text>
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
        {!this.state.isHidden7 && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "#ff4b4b", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/18/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden7.bind(this)} style={{ paddingLeft: 30 }}>X</a></Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 4:15 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 6:00 </Form.Text>
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
        {!this.state.isHidden8 && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "#50c54c", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/18/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden8.bind(this)} style={{ paddingLeft: 30 }}>X</a></Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 7:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 8:45 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Play:  </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> Play 4 </Form.Text>
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

{!this.state.isHidden9 && <div style={{ marginTop: 50 }} >
          <Container >
            <Form style={{ backgroundColor: "#5f6fff", borderRadius: 25, width: 900 }}>
              <Form.Group style={{ paddingLeft: 35 }}>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Date: </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> 2/18/21</Form.Text>
                  <Form.Text ><a style={{ textDecoration: "underline", paddingLeft: 650 }} onClick={this.handleShow} >Edit</a></Form.Text>
                  <Form.Text><a onClick={this.toggleHidden9.bind(this)} style={{ paddingLeft: 30 }}>X</a></Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Start Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 20 }}> 4:30 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>End Time: </Form.Label>
                  <Form.Text style={{ paddingLeft: 25 }}> 7:00 </Form.Text>
                </Form.Row>
                <Form.Row style={{ paddingTop: 5 }}>
                  <Form.Label>Play:  </Form.Label>
                  <Form.Text style={{ paddingLeft: 60 }}> Play 2 </Form.Text>
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


export default Calendar;
