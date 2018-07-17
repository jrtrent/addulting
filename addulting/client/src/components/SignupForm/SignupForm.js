import React from 'react'
import axios from 'axios'
import "./SignupForm.css";

class SignupForm extends React.Component {
    state = {
            username: '',
            password: '',
           
        } 

    handleNewUser=(e) => {
        e.preventDefault();
        this.setState({
            newUser: e.target.value
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
   
    }

    handleSubmit =(e) => {
        e.preventDefault();
        axios.post('/auth/signup', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response)
            if(!response.data.errmsg) {
                console.log('signin complete')
                this.setState({
                    redirectTo:'/login'
                })
            } else {
                console.log('duplicate')
            }
        })
    }

    render() {
            return (
                <div className="SignupForm">
                <h1>Signup Form</h1>
                <label htmlFor="username">Username: </label>
                <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                />

                <label htmlFor="password">Password: </label>
                <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />

            
                <button onClick={this.handleSubmit}>Signup</button>
                
                </div>
                
            )
        }
    }
   

export default SignupForm