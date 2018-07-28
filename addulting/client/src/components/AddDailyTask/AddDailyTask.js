import React, {Component} from 'react';
import axios from 'axios';




class AddDailyTask extends Component  {
    constructor(){
        super();
        this.state={
            name:"",
            category:"",
            priority: "",
            estTime: "",
            recurring: ""
           
        }
    }


    AddDailyTask(newdailyTask) {
        axios.request({
            method:"post",
            url:'http://localhost:3000/api/dailytasks',
            data:newdailyTask

        }).then(response => {
    
            this.props.history.push('/dailytasks')
        }).catch(err=>console.log(err));

    } //push is where it is redirected to.
    
    
    //componentDidMount() {
        //var elems = document.querySelectorAll('select');
       // var instances = window.M.FormSelect.init(elems, {});
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
       
        const newdailyTask = {
            name: this.state.name,
            category:this.state.category,
            priority: this.state.priority,
            estTime: this.state.estTime,
            recurring: this.state.recurring

        }
        this.AddDailyTask(newdailyTask);
       
    }
    
    render() {
        
        return (
           <div>
                <a className="waves-effect waves-light btn-small" href="/dailytasks"><i className="material-icons left">arrow_back</i>Back</a>
              <h1>Add dailytask </h1>
              <br />
              <form onSubmit={this.handleFormSubmit.bind(this)}>
                <div className="input-field">
                    <input type="text" name="name"  onChange={this.handleInputChange.bind(this)}/>
                    <label htmlFor="name">TaskName</label>
                </div>
                <div className="input-field col s12">
            
                    <select value={this.state.category} name="category" onChange={this.handleInputChange.bind(this)}>
                        <option value="" disabled selected>Category</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                        <option value="social">Social</option>
                        <option value="family">Family</option>
                    </select>
                    <label></label>
                </div>
                <div className="input-field col s12">
                    {/* <input type="text" name="priority" ref="priority" /> */}
            
                    <select value={this.state.priority} name="priority" onChange={this.handleInputChange.bind(this)}>
                        <option value="" disabled selected>Priority</option>
                        <option value="3">Low</option>
                        <option value="2">Medium</option>
                        <option value="1">High</option>
                    </select>
                    <label></label>
                </div>
                <div className="input-field col s12">
            
                    <select value={this.state.estTime} name="estTime" onChange={this.handleInputChange.bind(this)}>
                        <option value="" disabled selected>EstimatedTime</option>
                        <option value="15">15 min</option>
                        <option value="30">30 min</option>
                        <option value="45">45 min</option>
                        <option value="60">1 hour</option>
                        <option value="120">2 hour</option>
                        <option value="150">2 hours 30 min</option>
                        <option value="180">3 hours</option>
                        <option value="210">3 hours 30 min</option>
                        <option value="240">4 hours</option>
                    </select>
                    <label></label>
                </div>
                <div className="input-field col s12">
            
                    <select value={this.state.recurring} name="recurring" onChange={this.handleInputChange.bind(this)}>
                        <option value="" disabled selected>Recurring</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                        
                    </select>
                    <label></label>
              </div>
                <input type="submit" value="Save" className="btn" />
            
              </form>
   
        
         </div>
   

        );
    }

};

export default AddDailyTask;