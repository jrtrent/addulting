import React, {Component} from 'react';
import axios from 'axios';
import Jumbotron from "../Jumbotron";
import {Container} from "../Grid";
import CategoryItem from '../CategoryItem';






class Categories extends Component {
    constructor(){
        super();
        this.state={
            categories:[],
           
        }
    }
    //renders dailytasks when page loads
    componentWillMount(){
      this.getCategories();
    }
    //
    getCategories(){
        axios.get('http://localhost:3000/api/category')
            .then(response => {
               this.setState({categories: response.data},()=>{
                 //  console.log(this.state);
               })
            })
            .catch(err=>console.log(err));
    }

    AddDailyTask(newdailyTask) {
        axios.request({
            method:"post",
            url:'http://localhost:3000/api/dailytasks',
            data:newdailyTask

        }).then(response => {
    
            this.props.history.push('/categories')
        }).catch(err=>console.log(err));

    } //push is where it is redirected to. 

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
            recurring: this.states.recurring

        }
        console.log(newdailyTask);
        this.AddDailyTask(newdailyTask);
       
    }

    
render() {
        const categoryItems = this.state.categories.map((category, i) =>{
    return (
            <CategoryItem
            key={category.id} 
            item={category}/>
        )
    })
        return (
            <Container fluid>
               
                <Jumbotron>
                    My Tasks
                    <ul className="collection">
                        {categoryItems}
                    </ul>
                </Jumbotron>

                
               
                

            </Container>
        )
    
}
}
export default Categories;