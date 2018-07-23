import React from 'react'
import API from "../../utils/API"
import "./SignupForm.css";

class SignupForm extends React.Component {
    state = {
            username: '',
            password: '',
            email:''
           
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
        API.saveUser({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
        .then(response => {
            console.log(response)
            if(!response.data.errmsg) {
                console.log('signin complete')
                this.props.history.push('/login')
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

                 <label htmlFor="email">Email: </label>
                <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />

            
                <button onClick={this.handleSubmit}>Signup</button>
                
                </div>
                
            )
        }
    }
   

export default SignupForm