import React from 'react'

import "./Login.css";
import API from "../../utils/API"


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        email:''
       
    } 


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
   
    }
    
    handleNewLogin=(e) => {
        e.preventDefault();
        this.setState({
            newLogin: e.target.value
        })
    }

    loadRedirect = () => {
        this.setState({Red:'subjectentry'})
    }

    handleSubmit =(e) => {
        e.preventDefault();
        console.log(e);
       API.getUser(this.state.username)
       .then(response => {
        console.log(response)
        if(!response.data.errmsg) {
            console.log('login complete')
            this.props.history.push('/subjectentry')
        } else {
            console.log('login incorrect')
        }
    })
    }

    render() {
            return (
                <div className="Login">
                <h1>Login Form</h1>
                <form>
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
                <button onClick={this.handleSubmit}>Login</button>
                </form>
                </div>
                
            )
        }
    }
   
export default Login