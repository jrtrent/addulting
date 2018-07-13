import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import Nav from './components/Nav';
import Home from './components/Home';
import Header from './components/Header';
import DisplayLinks from "./components/Displaylinks"



class User extends Component {
  constructor() {
    super()
    this.state= {
      loggedIn: false,
      user: null
    }

    this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
  }

  componentDidMount() {
    axios.get('/auth/user').then(response => {
      console.log(response.data)
      if(!!response.data.user) {
        console.log('User exists')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
          } else {
            this.setState({
              loggedIn: false,
              user: null
           })
        }

      
    })
  }

  _logout(e) {
    e.preventDefault()
    console.log('logging out')
    axios
      .post('/auth/logout')
      .then(response => {
        console.log(response.data)
        if (response.status === 200) {
          this.setState({
            loggedIn: false,
            user: null
          })
        }
      })
  }

  _login(username,password) {
    axios
      .post('/auth/login', {
        username,
        password
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.setState({
            loggedIn: true,
            user: response.data.user
          })
        }
      })
  }

  render() {
    return (
      
      <div className="App">
      <h1>ADDulting</h1>
      <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
      <Header user ={this.state.user} />
    </div>
   
    )
  }
}

export default User;
