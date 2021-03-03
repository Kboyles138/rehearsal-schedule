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
import './checklist.css';

const mdbreact = require('mdbreact'); const { MDBInput } = mdbreact;

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

  toggleAll() {
    if (document.getElementById('myPlays').checked) {
      document.getElementById('play1').checked = true;
      document.getElementById('play2').checked = false;
      document.getElementById('play3').checked = true;
      document.getElementById('play4').checked = false;
    } else {
      document.getElementById('play1').checked = false;
      document.getElementById('play2').checked = false;
      document.getElementById('play3').checked = false;
      document.getElementById('play4').checked = false;
    }
  }


  uncheckMyEvents() {
    document.getElementById('myPlays').checked = false;
    //var times = ReactDOM.findDOMNode("calendar.js").getElementsByClassName("Red");
    var times = document.getElementsByClassName("rec");

    for (var i = 0; i < times.length; i++) {
      if (document.getElementById('play1').checked)
        times[i].style.display = 'none';
      else
        times[i].style.display = 'block';
    }
  }


  render() {
    const styles = {

      head: {
        textAlign: 'center',
        color: 'white',
        height: '50px',
        width: '200px',
        paddingTop: '13px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        background: '#414141',
        marginBottom: '0px',
        lineHeight: '20px',

        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      },

      content: {
        display: 'block',
        position: 'absolute',
        verticalAlign: 'center',
        fontSize: '18px',
        lineHeight: '22px',
        width: '200px',
        paddingLeft: '20px',
        paddingTop: '15px',
        paddingBottom: '20px',
        marginTop: '0px',
        borderColor: 'Red',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        background: '#E6E6E6',
        zIndex: '-1',

        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      },
      rec: {
        display: 'block',
        height: '10px',
        outline: 'solid',
      },
      break: { display: 'block', margin: '3px' },

      child1: {
        width: '80%',
        float: 'left',
        paddingLeft: '20px',

      },
      child2: {
        width: '20%',
        float: 'left',
        paddingTop: '75px',
        paddingLeft: '90px',
      }
    }
    return (
      <>
        <Container fluid >
          <div style={styles.child1}>

            <Row>
              <Col style={{ fontSize: 45, textAlign: 'center', backgroundColor: '#AB0032', borderTopRightRadius: 25, borderTopLeftRadius: 25, color: 'white' }}>FEB 14 - 20</Col>
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
                <Row style={{ textDecoration: 'underline', paddingLeft: 7 }}>Sunday 14</Row>

              </Col>
              <Col style={{ borderLeft: 'solid' }}>
                <Row style={{ textDecoration: 'underline', paddingLeft: 7 }}>Monday 15</Row>
                <Row style={{ paddingLeft: 5 }} className="Orange"><Button style={{ height: 110, width: 175, backgroundColor: '#ffa640' }} onClick={this.toggleHidden1.bind(this)} >3:00-5:00</Button></Row>
                <Row style={{ paddingLeft: 5, paddingTop: 75 }} className="Blue"><Button style={{ height: 75, width: 175, backgroundColor: '#5f6fff' }} onClick={this.toggleHidden3.bind(this)} >6:30-8:00</Button></Row>
              </Col>
              <Col style={{ borderLeft: 'solid' }}>
                <Row style={{ textDecoration: 'underline', paddingLeft: 7 }}>Tuesday 16</Row>
                <Row style={{ paddingLeft: 5, paddingTop: 100 }} className="Orange"><Button style={{ height: 110, width: 175, backgroundColor: '#ffa640' }} onClick={this.toggleHidden2.bind(this)}>5:00-7:00</Button> </Row>
                <Row style={{ paddingLeft: 5, paddingTop: 65 }} className="Red"><Button style={{ height: 75, width: 175, backgroundColor: '#ff4b4b' }} onClick={this.toggleHidden4.bind(this)} >8:00-9:00</Button></Row>
              </Col>
              <Col style={{ borderLeft: 'solid' }}>
                <Row style={{ textDecoration: 'underline', paddingLeft: 7 }}>Wednesday 17</Row>
                <Row style={{ paddingLeft: 5, paddingTop: 15 }} className="Green"><Button style={{ height: 55, width: 175, backgroundColor: '#50c54c' }} onClick={this.toggleHidden5.bind(this)} >3:15-4:00</Button></Row>
                <Row style={{ paddingLeft: 5, paddingTop: 213 }} className="Red"><Button style={{ height: 65, width: 175, backgroundColor: '#5f6fff' }} onClick={this.toggleHidden6.bind(this)} >8:15-9:00</Button></Row>

              </Col>
              <Col style={{ borderLeft: 'solid', }}>
                <Row style={{ textDecoration: 'underline', paddingLeft: 7 }}>Thursday 18</Row>
                <Row style={{ paddingLeft: 5, paddingTop: 60 }} className="Red"><Button style={{ height: 100, width: 175, backgroundColor: '#ff4b4b' }} onClick={this.toggleHidden7.bind(this)} >4:15-6:00</Button></Row>
                <Row style={{ paddingLeft: 5, paddingTop: 70 }} className="Green"><Button style={{ height: 85, width: 175, backgroundColor: '#50c54c' }} onClick={this.toggleHidden8.bind(this)} >7:00-8:45</Button></Row>

              </Col>
              <Col style={{ borderLeft: 'solid' }}>
                <Row style={{ textDecoration: 'underline', paddingLeft: 7 }}>Friday 19</Row>
                <Row style={{ paddingLeft: 5, paddingTop: 75 }} className="Blue"><Button style={{ height: 125, width: 175, backgroundColor: '#5f6fff' }} onClick={this.toggleHidden9.bind(this)} >4:30-7:00</Button></Row>
              </Col>

              <Col style={{ borderLeft: 'solid' }}>
                <Row style={{ textDecoration: 'underline', paddingLeft: 7 }}>Saturday 20</Row>
              </Col>
            </Row>

          </div >


          <div style={styles.child2}>
            <div>
              <h2 style={styles.head}>Events</h2>

              <div style={styles.content}>
                <div class="checkbox1">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="play1" onClick={this.uncheckMyEvents} />
                    <label class="custom-control-label" for="play1">Play 1 ⠀⠀⠀⠀⠀⭐</label>
                  </div> <br style={styles.break}></br>
                </div>
                <div class="checkbox2">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" value='test' id="play2" onClick={this.uncheckMyEvents} />
                    <label class="custom-control-label" for="play2">Play 2</label>
                  </div>
                </div> <br style={styles.break}></br>
                <div class="checkbox3">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="play3" onClick={this.uncheckMyEvents} />
                    <label class="custom-control-label" for="play3">Play 3 ⠀⠀⠀⠀⠀⭐</label>
                  </div>
                </div> <br style={styles.break}></br>
                <div class="checkbox4">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="play4" onClick={this.uncheckMyEvents} />
                    <label class="custom-control-label" for="play4">Play 4</label>
                  </div>
                </div> <br style={styles.break}></br>
                <div class="checkbox5">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="myPlays" onClick={this.toggleAll} />
                    <label class="custom-control-label" for="myPlays">My Events ⠀⠀⭐</label>
                  </div>
                </div> <br style={styles.break}></br>
              </div>
            </div>


          </div>
        </Container>
        <Container style={{paddingTop: 475}}>
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
        </Container>

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


