import React, {Component} from 'react';
import axios from 'axios';




class AddCategory extends Component  {
    AddCategory(newCategory) {
        axios.request({
            method:"post",
            url:'http://localhost:3000/api/categories',
            data:newCategory

        }).then(response => {
    
            this.props.history.push('/dailytasks')
        }).catch(err=>console.log(err));

    } //push is where it is redirected to. 

    handleFormSubmit = (e) => {
        e.preventDefault();
       
        const newCategory = {
            name: this.refs.name.value
           
        }
        this.AddCategory(newCategory);
       
    }
    
    render() {
        return (
           <div>
                <a className="waves-effect waves-light btn-small" href="/dailytasks"><i className="material-icons left">arrow_back</i>Back</a>
              <h1>Add Categories </h1>
              <br />
              <form onSubmit={this.handleFormSubmit.bind(this)}>
                <div className="input-field">
                    <input type="text" name="name" ref="name" />
                    <label htmlFor="name">Category</label>
                </div>
                
                <input type="submit" value="Save" className="btn" />
            
              </form>
              
              
        
         </div>
   

        );
    }

};

export default AddCategory;