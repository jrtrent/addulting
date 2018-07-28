import React, {Component} from 'react';
import axios from 'axios';





class EditDailyTask extends Component  {
        constructor(props){
            super(props);
            this.state = {
                id:'',
                name: '',
                category:'',
                priority: '',
                estTime: '',
                recurring:'',
                isDone:'',
                

            }
                this.handleInputChange=this.handleInputChange.bind(this);
            
        }

            componentWillMount() {
                this.getDailyTaskDetails();
            }
            getDailyTaskDetails(){
                let dailytaskId = this.props.match.params.id;
                axios.get(`http://localhost:3000/api/dailytasks/${dailytaskId}`)
                    .then(response => {
                    this.setState({
                        id: response.data.id,
                        name: response.data.name,
                        category: response.data.category,
                        priority: response.data.priority,
                        estTime: response.data.estTime,
                        recurring: response.data.recurring,
                        isDone:response.data.isDone
                    }, () => {
                        console.log(this.state);
                    });
                })
                    .catch(err=>console.log(err));
                }

            editDailyTask(newdailyTask) {
                axios.request({
                    method:"put",
                    url:`http://localhost:3000/api/dailytasks/${this.state.id}`,
                    data:newdailyTask
        
                }).then(response => {
                    this.props.history.push('/dailytasks');
                }).catch(err=>console.log(err));
        
            }
            
    handleFormSubmit = (e) => {
       
       
        const newdailyTask = {
            name: this.refs.name.value,
            category:this.refs.category.value,
            priority: this.refs.priority.value,
            estTime: this.refs.estTime.value,
            recurring: this.refs.recurring.value

        }
        this.editDailyTask(newdailyTask);
        e.preventDefault();
       
    }

    handleClick = event => {
        this.setState({ isDone: !this.state.isDone });
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    render() {
        return (
           <div>
                <a className="waves-effect waves-light btn-small" href="/dailytasks"><i className="material-icons left">arrow_back</i>Back</a>
              <h1>Edit dailytask </h1>
              <br />
              <form onSubmit={this.handleFormSubmit.bind(this)}>
                <div className="input-field">
                <label  htmlFor="name">TaskName</label>
                    <input type="text" 
                    name="name" 
                     ref="name"
                     placeholder=""
                     value={this.state.name}
                    onChange={this.handleInputChange}/>
                     
                    
                </div>
                <div className="input-field">
                <label  htmlFor="category">category</label>
                    <input type="text" name="category" ref="category" 
                    value={this.state.category}  
                    placeholder=""
                    onChange={this.handleInputChange}/>
                 
                </div>
                <div className="input-field">
                <label  htmlFor="priority">Priority</label>
                    <input type="text"
                     name="priority" 
                     ref="priority"
                     placeholder=""
                      value={this.state.priority}
                      onChange={this.handleClick}
                      />
                  
                </div>
                <div className="input-field">
                <label  htmlFor="estTime">Estimated Time</label>
                    <input type="text" 
                    name="estTime" 
                    ref="estTime" 
                    placeholder=""
                    value={this.state.estTime}
                    onChange={this.handleInputChange} />
                 
                </div>

                 <div className="input-field">
                 <label  htmlFor="recurring">Recurring</label>
                    <input type="text"
                     name="recurring" 
                     ref="recurring" 
                     placeholder=""
                     value={this.state.recurring}
                     onChange={this.handleInputChange}/>
                    
                </div>
                <div>
                    <label>
                        <input type="checkbox" 
                        checked={this.state.isDone}
                        onChange={this.handleClick} />
                         <span>Complete</span>
                    </label>
                </div>
    
                <input type="submit" value="Save" className="btn" />

              </form>
   
        
         </div>
   

        )
    }

}

export default EditDailyTask;