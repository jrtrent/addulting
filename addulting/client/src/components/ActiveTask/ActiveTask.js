import React from "react";

import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";
import 'react-select/dist/react-select.css';
import TaskDetail from "../TaskDetail";
import {Panel,ListGroup,ListGroupItem} from "react-bootstrap";
import "./ActiveTask.css"



class ActiveTask extends React.Component {
    state = {
        tasks: [],
        title: "",
        priority: "",
        estTime: "",
        recurring: "",
        subject:""

    }
    componentDidMount() {
        this.loadTasks();
    }
	
    loadTasks = () => {
        API.getTasks(this.pr)
			.then(res => this.setState({ tasks: res.data  }))
			
            .catch(err => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="sm-3 md-6">
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">
                                    
                                </Panel.Title>
                            </Panel.Heading>
                                <Panel.Body>
                                <ListGroup>
                                    <ListGroupItem href="#link1">
                                        <TaskDetail />
                                    </ListGroupItem>
                                    <ListGroupItem href="#link2">Link 2</ListGroupItem>
                                </ListGroup>
                                </Panel.Body>
                            <Panel.Footer>Complete Tasks</Panel.Footer>
                        </Panel>
					</Col>
                    <Col size="sm-3 md-6">
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">
                                    Tasks
                                </Panel.Title>
                            </Panel.Heading>
                                <Panel.Body>
                                <ListGroup>
                                    <ListGroupItem href="#link1">Link 1</ListGroupItem>
                                    <ListGroupItem href="#link2">Link 2</ListGroupItem>
                                </ListGroup>
                                </Panel.Body>
                            <Panel.Footer>Complete Tasks</Panel.Footer>
                        </Panel>
					</Col>
				</Row>
                <Row>
					<Col size="sm-3 md-6">
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">
                                    Tasks
                                </Panel.Title>
                            </Panel.Heading>
                                <Panel.Body>
                                <ListGroup>
                                    <ListGroupItem href="#link1">Link 1</ListGroupItem>
                                    <ListGroupItem href="#link2">Link 2</ListGroupItem>
                                </ListGroup>
                                </Panel.Body>
                            <Panel.Footer>Complete Tasks</Panel.Footer>
                        </Panel>
					</Col>
                    <Col size="sm-3 md-6">
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">
                                    Tasks
                                </Panel.Title>
                            </Panel.Heading>
                                <Panel.Body>
                                <ListGroup>
                                    <ListGroupItem href="#link1">Link 1</ListGroupItem>
                                    <ListGroupItem href="#link2">Link 2</ListGroupItem>
                                </ListGroup>
                                </Panel.Body>
                            <Panel.Footer>Complete Tasks</Panel.Footer>
                        </Panel>
					</Col>
				</Row>
			</Container>

		);
	}
}

export default ActiveTask;