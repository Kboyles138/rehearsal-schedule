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
                display: 'inline-block',
                position: 'relative',
                width: '150px',
                fontSize: '18px',
                lineHeight: '20px',
                paddingLeft: '30px',
                webkitUserSelect: 'none',
                mozUserSelect: 'none',
                msUserSelect: 'none',
                userSelect: 'none'
            },
            oldBox: {
                opacity: '0',
                height: '0'
            },
            boxes: {
                marginLeft: '20px',
            },
            newBox: {
                position: 'absolute',
                height: '15px',
                width: '15px',
                border: '2px solid red',
                borderRadius: '4px'
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

                <label class="checkbox">
                    <input type="checkbox" style={styles.boxes}/>
                    <span style={styles.labels}>Play 1<br></br></span>
                </label>
                <br></br>
                <label class="checkbox">
                    <input type="checkbox" style={styles.boxes}/>
                    <span style={styles.labels}>Play 2<br></br></span>
                </label>
                <br></br>
                <label class="checkbox">
                    <input type="checkbox" style={styles.boxes}/>
                    <span style={styles.labels}>Play 3</span>
                </label>
                <br></br>
                <label class="checkbox">
                    <input type="checkbox" style={styles.boxes}/>
                    <span style={styles.labels}>Play 4<br></br></span>
                </label>
                <br></br>
                <label class="checkbox">
                    <input type="checkbox" style={styles.boxes}/>
                    <span style={styles.labels}>My Rehearsals<br></br></span>
                </label>
            </div>
        </div>
        );
    }
}


export default Checklist;