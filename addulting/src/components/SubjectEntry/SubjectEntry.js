import React from "react";
import "./SubjectEntry.css";

class SubjectEntry extends React.Component {
    state = {
        subjects: [],
        newSubject: ''
    }
    handleNewSubject = (e) => {
        e.preventDefault();

        this.setState({
            subjects: [...this.state.subjects, this.state.newSubject]
           
        })
        console.log(e.target)
    }

    handleSubjectChange = (e) => {
        this.setState({
            newSubject: e.target.value

        })
        

    }

    removeItem = idx => {
        this.setState({ subjects: this.state.subjects.filter((subject, x) => x !== idx) })
    }

    render() {
        return <div>
            
            <form onSubmit={this.handleNewSubject}>
                <input name="new-subject" onChange={this.handleSubjectChange} />
            </form>

            {this.state.subjects.map((subject, idx) => <p>
                <span style={{ marginRight: '1em' }} onClick={() => this.removeItem(idx)}>X</span>{subject}</p>)}
        </div>

    }
}

export default SubjectEntry;