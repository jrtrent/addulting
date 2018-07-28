import React, {Component} from 'react';
import axios from 'axios';
import Jumbotron from "../Jumbotron";
import {Container, Row, Col} from "../Grid";
import CategoryItem from '../CategoryItem';
import DailyTaskItem from '../DailyTaskItem';
import {Panel,ListGroup,ListGroupItem} from "react-bootstrap";

class CategoryHome extends Component  {
    constructor(){
        super();
        this.state={
            
            dailytasks:[]
        }
    }
    //renders dailytasks when page loads
    componentWillMount(){
    
      this.getDailyTasks();
    }
    

    getDailyTasks(){
        axios.get('http://localhost:3000/api/dailytasks?filter[category]=home%20DESC&filter[limit]=2')
            .then(response => {
               this.setState({dailytasks: response.data},()=>{
                 console.log(this.state);
               })
            })
            .catch(err=>console.log(err));
    }
render() {
 
    const dailyTaskItems = this.state.dailytasks.map((dailytask, i) =>{
        return (
                <DailyTaskItem  
                key={dailytask.id} 
                item={dailytask}/>
            )
        })
        return (
            
            <div>
               <ul className="collection with header">
                <li class="collection-header center align"><h4>Home</h4></li>
                        {dailyTaskItems}
                    </ul>
		
            </div>
        )
    
}
}

export default CategoryHome;