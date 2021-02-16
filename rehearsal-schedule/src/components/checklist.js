import React from 'react';
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
                marginTop: '0',
                marginBottom: '10px'
            },
            labels: {
                fontSize: '18px',
                lineHeight: '30px',
                paddingLeft: '10px',
            },

            boxes: {
                marginLeft: '20px',
            },

            everything: {
                position: 'absolute',
                padding: '20px'
            },

            rectangle: {
                width: '200px',
                height: '250px',
                borderColor: 'Red',
                borderRadius: '10px',
                background: '#E6E6E6',
                position: 'absolute',
                zIndex: '-1'
            }
        }

        return( 
        <div style={styles.everything}>
            <div style={styles.rectangle} />
            <div>
                <h2 style={styles.head}>Events</h2>
                < input type="checkbox"  style={styles.boxes} id="Play 1" name="Play 1" />
                <label for="Play 1" style={styles.labels}>Play 1</label>
                <br></br>
                < input type="checkbox" style={styles.boxes} id="Play 2" name="Play 2" />
                <label for="Play 2" style={styles.labels}>Play 2</label>
                <br></br>
                < input type="checkbox" style={styles.boxes} id="Play 3" name="Play 3" />
                <label for="Play 3" style={styles.labels}>Play 3</label>
                <br></br>
                < input type="checkbox" style={styles.boxes} id="Play 4" name="Play 4" />
                <label for="Play 4" style={styles.labels}>Play 4</label>
                <br></br>
                < input type="checkbox" style={styles.boxes} id="My Rehearsals" name="My Rehearsals" />
                <label for="My Rehearsals" style={styles.labels}>My Rehearsals</label>
            </div>
        </div>
        );
    }
}


export default Checklist;