mport React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import "./SignupForm.css";

class SignupForm extends React.Component {
    constructor()  {
        super();
        this.state = {
            username: '',
            password: '',
            confrimPassword:'',
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
        axios.post('/auth/signup', {
            username: this.state.username,
            password: this.state.password
        })
        .thn(response => {
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
        if(this.state.redirectTo){
            return <Redirect to={{pathname:this.state.redirectTo}} />
        } else {
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

                <label htmlFor="confirmpassword">Confrim Password: </label>
                <input
                type="password"
                name="confrimpassword"
                value={this.state.confrimpassword}
                onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Signup</button>
                
                </div>
                
            )
        }
    }
   
}
export default SignupForm