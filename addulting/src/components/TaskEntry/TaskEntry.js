import React from "react";
import "./TaskEntry.css"
import { Container, Row, Col } from "../Grid";
import {FormGroup} from "react-bootstrap";


class TaskEntry extends React.Component {
    state = {
        tasks:[],
        newTask:"",
        priority:"",
        estTime:"",
        recurring:""

    }
    
    handleNewTask =(e) =>{
        e.prevenDefault();
        this.setState({
            tasks: [...this.state.tasks,this.state.newTask]
            })
    }

    handleInputChange = (e) => {
        const {name, value} =event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = (e) => {
        e.prevenDefault();
        // add in if statement of required?
        API.saveTask({            
        priority:this.state.priority,
        estTime:this.state.estTime,
        recurring:this.state.recurring

        })
        .catch(err => console.log(err));
    }

    render() {
            return <div>
            <Container fluid>
            <Row>
                <Col size="md-6">
                    
                        <form>
                                <FormGroup
                                    controlID="formBasicText">
                                    <ControlLabel>What are the two most important 
                                        tasks to be completed today></ControlLabel>
                                <FormControl
                                type="text"
                                name="newTask"
                                onChange={this.handleInputChange}
                                />
                            </FormGroup>  
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>               
        
    }

};

export {default} TaskEntry;