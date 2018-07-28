import React, {Component} from 'react';
import axios from 'axios';
import Jumbotron from "../Jumbotron";
import {Container} from "../Grid";
import DailyTaskItem from '../DailyTaskItem';

class Dailytasks extends Component {
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
    //
    getDailyTasks(){
        axios.get('http://localhost:3000/api/dailytasks')
            .then(response => {
               this.setState({dailytasks: response.data},()=>{
                 //  console.log(this.state);
               })
            })
            .catch(err=>console.log(err));
    }

    addCategoryHome(){
        axios.post(`http://localhost:3000/api/dailytasks/upsertWithWhere?where=%7B%22category%22%3Ahome%22%7D`)
        .then(response => {
            this.props.history.push('/dailytasks');
        }).catch(err=>console.log(err));

    
    }
    addCategoryWork(){
        axios.post(`http://localhost:3000/api/dailytasks/upsertWithWhere?where=%7B%22category%22%3A%22work%22%7D`)
        .then(response => {
            this.props.history.push('/dailytasks');
        }).catch(err=>console.log(err));

    
    }
    addCategoryFamily(){
        axios.post(`http://localhost:3000/api/dailytasks/upsertWithWhere?where=%7B%22category%22%3A%22family%22%7D`)
        .then(response => {
            this.props.history.push('/dailytasks');
        }).catch(err=>console.log(err));

    
    }
    addCategorySocial(){
        axios.post(`http://localhost:3000/api/dailytasks/upsertWithWhere?where=%7B%22category%22%3A%22social%22%7D`)
        .then(response => {
            this.props.history.push('/dailytasks');
        }).catch(err=>console.log(err));

    
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
            <Container fluid>
                <Jumbotron>
                    My Tasks
                    <ul className="collection">
                        {dailyTaskItems}
                    </ul>
                </Jumbotron>
            </Container>
        )
    
}
}
export default Dailytasks;