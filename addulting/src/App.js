import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import Nav from './components/Nav';
import Home from './components/Home';
import Header from './components/Header';
import DisplayLinks from "./components/Displaylinks";
import User from './components/User';



const App = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={User} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignupForm} />
			</Switch>
		</div>
	</Router>
);


export default App;
