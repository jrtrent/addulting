import React, {Component} from 'react';
import axios from 'axios';



class Login extends Component  {
    Login(User) {
        axios.request({
            method:"post",
            url:'http://localhost:3000/api/Users/login',
            data:User

        }).then(response => {
    
            this.props.history.push('/dailytasks')
        }).catch(err=>console.log(err));

    } //push is where it is redirected to. 

    handleFormSubmit = (e) => {
        e.preventDefault();
       
        const User = {
            username: this.refs.username.value,
            email:this.refs.email.value,
            password: this.refs.password.value
            

        }
        this.Login(User);
       
    }
    
    render() {
        return (
           <div>
                <a className="waves-effect waves-light btn-small" href="/dailytasks"><i className="material-icons left">arrow_back</i>Back</a>
              <h1>Login </h1>
              <br />
              <form onSubmit={this.handleFormSubmit.bind(this)}>
                <div className="input-field">
                    <input type="text" name="username" ref="username" />
                    <label htmlFor="username">UserName</label>
                </div>
                <div className="input-field">
                    <input type="email" name="email" ref="email" />
                    <label htmlFor="email">email</label>
                </div>
                <div className="input-field">
                    <input type="password" name="password" ref="password" />
                    <label htmlFor="password">Password</label>
                </div>
               
                <input type="submit" value="Save" className="btn" />
            
              </form>
   
        
         </div>
   

        );
    }

};

export default Login;