import React, {Component} from 'react';
import axios from 'axios';

class CategoryDetails extends Component  {
    constructor(props){
        super(props);
        this.state = {
           details:''
        }
    }

    componentWillMount() {
        this.getCategoryDetails()
    }

    
    getCategoryDetails(){
        
      
        axios.get('http://localhost:3000/api/dailytasks?filter[where][category]=home')
            .then(response => {
               this.setState({details: response.data}, ()=>{
                 console.log(this.state);
               })
            })
            .catch(err=>console.log(err));
        }

    
    render() {
        return (
           <div>
               hi
               <br />
              <a className="waves-effect waves-light btn-small" href="/dailytasks"><i className="material-icons left">arrow_back</i>Back</a>
               <h2>{this.state.details.name}</h2>
               
            </div>

        )
    }
}

export default CategoryDetails;