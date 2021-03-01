import React from 'react';
import './checklist.css';

const mdbreact = require('mdbreact'); const { MDBInput } = mdbreact;
class Checklist extends React.Component {
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

             break: {display:'block', margin:'3px'}
        }

        return( 
        <div>
            <div>
                <h2 style={styles.head}>Events</h2>
                <div style={styles.content}>
                    <div class="checkbox1">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="play1" />
                            <label class="custom-control-label" for="play1">Play 1</label>
                        </div> <br style={styles.break}></br>
                    </div>
                    <div class="checkbox2">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="play2" />
                            <label class="custom-control-label" for="play2">Play 2</label>
                        </div>
                    </div> <br style={styles.break}></br>
                    <div class="checkbox3">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="play3" />
                            <label class="custom-control-label" for="play3">Play 3</label>
                        </div>
                    </div> <br style={styles.break}></br>
                    <div class="checkbox4">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="play4" />
                            <label class="custom-control-label" for="play4">Play 4</label>
                        </div>
                    </div> <br style={styles.break}></br>
                    <div class="checkbox5">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="myPlays" />
                            <label class="custom-control-label" for="myPlays">My Events</label>
                        </div>
                    </div> <br style={styles.break}></br>
                </div>
            </div>
        </div>
        );
    }
}


export default Checklist;