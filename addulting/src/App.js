import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import SubjectEntry from './components/SubjectEntry'




const App = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/SubjectEntry" component={SubjectEntry}/>
				<Route exact path="SignupForm" component={SignupForm}/>
			</Switch>
		</div>
	</Router>
);


export default App;
