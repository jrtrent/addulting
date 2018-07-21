import React, {Component} from "react";
import "./TaskEntry.css"
import { Container, Row, Col } from "../Grid";
import { FormBtn } from "../../components/Form";
import API from "../../utils/API";
import 'react-select/dist/react-select.css';



class TaskEntry extends Component {
    state = {
        tasks:[],
        title:"",
        priority:"",
        estTime:"",
        recurring:"",

    }
    componentDidMount() {
        this.loadTasks();
      }
    
      loadTasks = () => {
        API.getTasks()
          .then(res => this.setState({ tasks: res.data }))
          .catch(err => console.log(err));
      };
    
      deleteTasks = id => {
        API.deleteTasks(id)
          .then(res => this.loadTasks())
          .catch(err => console.log(err));
      };
   
      handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

   

    

    handleFormSubmit = (e) => {
        e.preventDefault
        const newTask ={
        title:this.state.task,           
       priority:this.state.priority,
       estTime:this.state.estTime,
       recurring:this.state.recurring

    }
    API.saveTask(newTask)
			.then(res => {
				this.setState({
					title: "",
					priority: "",
                    estTime: "",
                    recurring:""
				})

				this.loadTasks()
			})
			.catch(e => {
				console.log(e);
			})
	}

    
     

    render() {
            return(
                 <div>
            <Container fluid>
            <Row>
                <Col size="md-6">
                    
                        <label>
                            New Task:
                        </label>
                        <input type="text" onChange={this.handleInputChange} name="task" placeholder="New Task" />
                        <label>
                            What Priority is this task?
                            <select name="priority" onChange={this.handleInputChange}>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </label>
                        <label>
                            Is this task recurring?
                            <select onChange={this.handleInputChange} name="recurring">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </label>                             
                            <FormBtn onClick={this.handleFormSubmit}>Save Task</FormBtn> 
                    </Col>
                </Row>
            </Container>
        </div>               
            );
    }

};

export default TaskEntry;