import React, {Component} from 'react';
import axios from "axios";

class CategoryItem extends Component  {
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        
         
        }
    }
    
      
    getCategoryTasks(){
        let categoryName =this.state.item.name;
        axios.get(`http://localhost:3000/api/dailytasks?filter[where][category]=${categoryName}`)
        .then(response => {
           console.log(response.data);
        }).catch(err=>console.log(err));

    
    }
        
       
    render() {
        
        return (
        <div>
            <a href={`/categories/${this.state.item.id}`} className="collection-item">{this.state.item.name}</a>
            
           
        </div>
        )
    }
}

export default CategoryItem;