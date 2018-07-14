import React from "react";
import {Container, Row, Col}from "../Grid";
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
            <Container fluid >
                <Row>
                    <Col size=" sm 4 md-8">
                        <p>What are the four main areas of your life, in which you need to accomplish tasks.</p>
                            <form onSubmit={this.handleNewSubject}>
                                <input name="new-subject" onChange={this.handleSubjectChange} />
                            </form>
                
                            {this.state.subjects.map((subject, idx) => <p>
                            <span style={{ marginRight: '1em' }} onClick={() => this.removeItem(idx)}>X</span>{subject}</p>)}
                    </Col>
                 </Row>
            </Container>
        </div>

    }
};

export default SubjectEntry;