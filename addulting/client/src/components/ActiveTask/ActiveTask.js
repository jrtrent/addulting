import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";
import 'react-select/dist/react-select.css';
import{List, ListItem} from "../List";
import SubjectEntry from "../SubjectEntry";
import TaskEntry from "../TaskEntry"


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
        API.getTasks(this.props.match.task_id)
			.then(res => this.setState({ tasks: res.data  }))
			
            .catch(err => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-6">
					
					</Col>
				</Row>
			</Container>

		);
	}
}

export default ActiveTask;