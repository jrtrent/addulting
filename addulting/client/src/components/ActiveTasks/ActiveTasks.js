import React, {Component} from 'react';
import axios from 'axios';
import Jumbotron from "../Jumbotron";
import {Container, Row, Col} from "../Grid";
import CategoryItem from '../CategoryItem';
import DailyTaskItem from '../DailyTaskItem';
import {Panel,ListGroup,ListGroupItem} from "react-bootstrap";
import CategoryHome from "../CategoryHome";




const ActiveTasks = () => (
    <div>
        <Container fluid>
		<Row>
					<Col size="sm-3 md-6">
        <CategoryHome />
        </Col>
        </Row>
        </Container>
    </div>

)
export default ActiveTasks;