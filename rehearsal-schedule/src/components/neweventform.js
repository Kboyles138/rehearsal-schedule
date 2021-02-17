import React from 'react';

class Form extends React.Component {
    state = {
        Date: ",
        StartTime: ",
        EndTime: ",
        AddPeople: ",
        Details: ",
    }

    render() {
        return (
            <form>
                <label>
                    Date
                </label>
                <input placeholder='Date'
                    value={this.state.Date}
                    onChange={e => thissetState({ Date: e.target.value })}
                />
                <label>
                    Start Time
                </label>
                <input placeholder='StartTime'
                    value={this.state.StartTime}
                    onChange={e => this.setState({ StartTime: e.target.value })}
                />
                <label>
                    End Time
                </label>
                <input placeholder='EndTime'
                    value={this.state.EndTime}
                    onChange={e => this.setState({ EndTime: e.target.value })}
                />
                <label>
                    SelectPlay
                <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Play1"> Play 1</option>
                        <option value="Play2"> Play 2</option>
                        <option value="Play3"> Play 3</option>
                        <option value="Play4"> Play 4</option>
                        <option value="AddNew">Add New Play</option>
                    </select>
                </label>
                <label>
                    Add People
                </label>
                <input placeholder="AddPeople"
                    value={this.state.AddPeople}
                    onChange={e => this.setState({ AddPeople: e.target.value })}
                />
                <label>
                    Details
                </label>
                <input placeholder="Details"
                    value={this.state.Details}
                    onChange={e => this.setState({ Details: e.target.value })}
                />
                <input type="submit" value="Submit" />
            </form>

        );
        
    }
}
export default Form;