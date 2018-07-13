import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import SubjectEntry from './components/SubjectEntry'




const App = () => (
	<div>
		<SubjectEntry />
	</div>
);


export default App;
