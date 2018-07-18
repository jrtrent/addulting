import React, {Component} from "react";
import "./TaskEntry.css"
import { Container, Row, Col } from "../Grid";
import { Input, FormBtn } from "../../components/Form";
import Select from 'react-select';
import 'react-select/dist/react-select.css';



class TaskEntry extends Component {
    state = {
        tasks:[],
        newTask:"",
        priority:"",
        estTime:"",
        recurring:"",
        selectedOption:""

    }
    
   
    handleNewTask =(e) =>{
        e.prevenDefault();
        this.setState({
            tasks: [...this.state.tasks,this.state.newTask]
            })
    }

    handleInputChange = event => {
        const name =event.target.value;
         const value = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Selected: ${selectedOption.label}`);
    }
    

    handleFormSubmit = (e) => {
        e.prevenDefault();
        // add in if statement of required?
       // const newTask ={            
       // priority:this.state.priority,
       //// estTime:this.state.estTime,
       /// recurring:this.state.recurring

       // }
       // .catch(err => console.log(err));
    }

    render() {
        const { selectedOption} = this.state;
      //  const value = selectedOption && selectedOption.value;
            return(
                 <div>
            <Container fluid>
            <Row>
                <Col size="md-6">
                    
                    <form>
                        <Input onChange={this.handleInputChange} value={this.state.newTask} name="newTask" placeholder="New Task" />
                        <Select
                            name="form-field-name"
                            value={this.state.priority}
                            onChange={this.handleChange}
                             options={[
                            { value: 'low', label: 'low' },
                            { value: 'medium', label: 'medium' },
                            { value: 'high', label: 'high' },
                             ]}
                            />   
                        <Select
                            name="form-field-name"
                            value={this.state.recurrring}
                            onChange={this.handleChange}
                             options={[
                            { value: 'yes', label: 'Yes' },
                            { value: 'No', label: 'No' },
                            
                             ]}
                            />                               
                            <FormBtn onClick={this.handleFormSubmit}>Save Task</FormBtn> 
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>               
            );
    }

};

export default TaskEntry;