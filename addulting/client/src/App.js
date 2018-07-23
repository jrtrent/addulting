import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import SubjectEntry from './components/SubjectEntry';
import TaskEntry from './components/TaskEntry';
import ActiveTaskTable from './components/ActiveTask';

const App = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/login" component={Login} />
				<Route exact path= "/task" component={TaskEntry}/>
				<Route exact path="/SubjectEntry" component={SubjectEntry}/>
				<Route exact path="/SignupForm" component={SignupForm}/>
				<Route exact path="/TaskEntry" component={TaskEntry}/>
				<Route exact path="/ActiveTask" component={ActiveTaskTable} />
			</Switch>
		</div>
	</Router>
);


export default App;
