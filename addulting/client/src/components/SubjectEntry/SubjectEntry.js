import React from "react";
import {Container, Row, Col}from "../Grid";
import {FormBtn} from "../Form";
import API from "../../utils/API";

import "./SubjectEntry.css";

class SubjectEntry extends React.Component {
    state = {
        subjects: [],
        newSubject: ''
    };

    componentDidMount() {
        this.loadSubjects();
      }
    
      loadSubjects = () => {
        API.getSubjects()
          .then(res =>
            this.setState({ subjects: res.data, topic: "" })
          )
          .catch(err => console.log(err));
      };
    
      deleteSubject = id => {
        API.deleteSubject(id)
          .then(res => this.loadSubjects())
          .catch(err => console.log(err));
      };
    
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

    handleFormSubmit = event => {
        event.preventDefault();
          API.saveSubjects({
            topic: this.state.subjects
           
          })
            .then(res => this.loadSubjects())
            .catch(err => console.log(err));
        
    };

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
                            <FormBtn
                             onClick={this.handleFormSubmit}
                            >
                                Submit Subjects
                            </FormBtn>
                    </Col>
                 </Row>
            </Container>
        </div>

    }
};

export default SubjectEntry;