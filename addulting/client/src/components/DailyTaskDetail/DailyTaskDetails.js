import React, {Component} from 'react';
import axios from 'axios';

class DailyTaskDetails extends Component  {
    constructor(props){
        super(props);
        this.state = {
           details:''
        }
    }

    componentWillMount() {
        this.getDailyTask()
    }
    getDailyTask(){
        let dailytaskId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/dailytasks/${dailytaskId}`)
            .then(response => {
               this.setState({details: response.data}, ()=>{
                 console.log(this.state);
               })
            })
            .catch(err=>console.log(err));
        }

        onDelete(){
            let dailytaskId =this.state.details.dailytask;
            axios.delete(`http://localhost:3000/api/dailytasks/${dailytaskId}`)
                .then(response =>{
                    this.props.history.push('/dailytasks');
                }).catch(err =>console.log(err));
        }
    render() {
        return (
           <div>
               <br />
              <a className="waves-effect waves-light btn-small" href="/dailytasks"><i className="material-icons left">arrow_back</i>Back</a>
               <h2>{this.state.details.name}</h2>
               <ul className="collection">
                <li className="collection-item">Priority: {this.state.details.priority}</li>
                </ul>
                <a  className="btn" href={`/dailytasks/edit/${this.state.details.id}`}>Edit</a>
                <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
            </div>

        )
    }
}

export default DailyTaskDetails;