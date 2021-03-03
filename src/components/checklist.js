import React from 'react';
import ReactDOM from 'react-dom'
import './checklist.css';
import Calndar from './calendar.js';

const mdbreact = require('mdbreact'); const { MDBInput } = mdbreact;
class Checklist extends React.Component {

    //Step 1: make a checkbox print something
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

    }
    toggleAll(){
        if (document.getElementById('myPlays').checked) 
        {
            document.getElementById('play1').checked = true;
            document.getElementById('play2').checked = false;
            document.getElementById('play3').checked = true;
            document.getElementById('play4').checked = false;
        } else 
        {
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
        
        for (var i = 0; i < times.length; i ++) {
            if (document.getElementById('play1').checked)
                times[i].style.display = 'none';
            else 
                times[i].style.display = 'block';
        }
    }

      handleShow() {

      }

      handleHide() {

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
             break: {display:'block', margin:'3px'}
        }

        return( 
        <div>
            <div>
                <h2 style={styles.head}>Events</h2>
                <div class="Play1">
                    <rect style={styles.rec} id="rec" class="rec"/>
                    <rect style={styles.rec} id="rec" class="rec"/>
                    <rect style={styles.rec} id="rec" class="rec"/>

                </div>
                <div style={styles.content}>
                    <div class="checkbox1">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="play1" onClick={this.uncheckMyEvents}/>
                            <label class="custom-control-label" for="play1">Play 1 ⠀⠀⠀⠀⠀⭐</label>
                        </div> <br style={styles.break}></br>
                    </div>
                    <div class="checkbox2">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value='test' id="play2" onClick={this.uncheckMyEvents}/>
                            <label class="custom-control-label" for="play2">Play 2</label>
                        </div>
                    </div> <br style={styles.break}></br>
                    <div class="checkbox3">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="play3" onClick={this.uncheckMyEvents}/>
                            <label class="custom-control-label" for="play3">Play 3 ⠀⠀⠀⠀⠀⭐</label>
                        </div>
                    </div> <br style={styles.break}></br>
                    <div class="checkbox4">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="play4" onClick={this.uncheckMyEvents}/>
                            <label class="custom-control-label" for="play4">Play 4</label>
                        </div>
                    </div> <br style={styles.break}></br>
                    <div class="checkbox5">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="myPlays" onClick={this.toggleAll}/>
                            <label class="custom-control-label" for="myPlays">My Events ⠀⠀⭐</label>
                        </div>
                    </div> <br style={styles.break}></br>
                </div>
            </div>


        </div>
        );
    }
}


export default Checklist;