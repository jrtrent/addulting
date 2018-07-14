import React from 'react'
import { Redirect } from 'react-router-dom'
import "./Login.css";

class Login extends React.Component {
    constructor()  {
        super();
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }

        //e6?
        this.handleSubmit =this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
   
    }

    handleSubmit =(e) => {
        e.preventDefault();
        console.log('handlesubmit');
        this.props._login(this.state.username, this.state.password)
        this.setState({
            redirectTo:"/"
        })
    }

    render() {
        if(this.state.redirectTo){
            return <Redirect to={{pathname:this.state.redirectTo}} />
        } else {
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
   
}
export default Login