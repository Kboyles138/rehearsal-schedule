import React from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
//import 'react-week-calendar/dist/style.css';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

export default class StandardCalendar extends React.Component {
  render() {
    return (
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
            <Row style={{ textDecoration: 'underline' }}>Sunday</Row>
            
          </Col>
          <Col style={{ borderLeft: 'solid' }}>
            <Row style={{ textDecoration: 'underline' }}>Monday</Row>
            <Row style={{ paddingLeft: 5 }}><Button style={{ height: 110, width: 175, backgroundColor: 'orange' }}>3:00-5:00</Button></Row>
          </Col>
          <Col style={{ borderLeft: 'solid' }}>
            <Row style={{ textDecoration: 'underline' }}>Tuesday</Row>
            <Row style={{ paddingLeft: 5, paddingTop: 100}}><Button style={{ height: 110, width: 175, backgroundColor: 'orange' }}>5:00-7:00</Button></Row>
          </Col>
          <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Wednesday</Col>
          <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Thursday</Col>
          <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Friday</Col>
          <Col style={{ borderLeft: 'solid', textDecoration: 'underline' }}>Saturday</Col>
        </Row>

      </Container>
    );
  }


}

/*constructor(props) {
  super(props);
  this.state = {
    lastUid: 4,
    selectedIntervals: [
      {
        uid: 1,
        start: moment({h: 10, m: 5}),
        end: moment({h: 12, m: 5}),
        value: "Booked by Smith"
      },
      {
        uid: 2,
        start: moment({h: 13, m: 0}).add(2,'d'),
        end: moment({h: 13, m: 45}).add(2,'d'),
        value: "Closed"
      },
      {
        uid: 3,
        start: moment({h: 11, m: 0}),
        end: moment({h: 14, m: 0}),
        value: "Reserved by White"
      },
    ]
  }
}

handleEventRemove = (event) => {
  const {selectedIntervals} = this.state;
  const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
  if (index > -1) {
    selectedIntervals.splice(index, 1);
    this.setState({selectedIntervals});
  }

}

handleEventUpdate = (event) => {
  const {selectedIntervals} = this.state;
  const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
  if (index > -1) {
    selectedIntervals[index] = event;
    this.setState({selectedIntervals});
  }
}

handleSelect = (newIntervals) => {
  const {lastUid, selectedIntervals} = this.state;
  const intervals = newIntervals.map( (interval, index) => {

    return {
      ...interval,
      uid: lastUid + index
    }
  });

  this.setState({
    selectedIntervals: selectedIntervals.concat(intervals),
    lastUid: lastUid + newIntervals.length
  })
}

render() {
  return <WeekCalendar
    startTime = {moment({h: 15, m: 0})}
    endTime = {moment({h: 21, m: 30})}
    numberOfDays= {7}
    selectedIntervals = {this.state.selectedIntervals}
    onIntervalSelect = {this.handleSelect}
    onIntervalUpdate = {this.handleEventUpdate}
    onIntervalRemove = {this.handleEventRemove}
  />
}
}*/
