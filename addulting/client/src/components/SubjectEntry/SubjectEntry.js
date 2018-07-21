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
            this.setState({ subjects: res.data, title: "" })
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
        console.log("hey");
          API.saveSubjects({
            
            title: this.state.subjects
           
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
                                <input 
                                name="new-subject"
                                value={this.state.username}
                                onChange={this.handleSubjectChange} />
                            </form>
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