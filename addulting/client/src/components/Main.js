import React from  'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dailytasks from "./Dailytasks";
import About from "./About";
import Home from "./Home";
import DailyTaskDetails from '../components/DailyTaskDetail';
import AddDailyTask from '../components/AddDailyTask';
import EditDailyTask from '../components/EditDailyTask';
import SignupForm from "../components/SignupForm";
import Login from "../components/Login";
import AddCategory from './AddCategory/AddCategory';
import CategoryDetails from './CategoryDetails';
import Categories from "./Categories";
import ActiveTasks from "./ActiveTasks";
import CurrentTask from "./CurrentTask";
import CategoryHome from "./CategoryHome";


const Main = () => (
    <Router>
        <div>
        <Switch>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/signup" component={SignupForm}/>
            <Route exact path ="/Login" component={Login}/>
            <Route exact path ="/categories/add" component={AddCategory}/>
            <Route exact path ="/categories" component={Categories}/>
            <Route exact path ="/categoryhome" component={CategoryHome}/>
            <Route exact path ="/categoryDetails" component={CategoryDetails}/>
            <Route exact path ="/Dailytasks" component={Dailytasks}/>
            <Route exact path ="/activetasks" component={ActiveTasks}/>
            <Route exact path ="/currenttasks" component={CurrentTask}/>
            <Route exact path ="/About" component={About}/>
            <Route exact path ="/dailytasks/add" component={AddDailyTask}/>
            <Route exact path ="/dailytasks/edit/:id" component={EditDailyTask}/>
            <Route exact path ="/dailytasks/:id" component={DailyTaskDetails}/>

        </Switch>
        </div>
    </Router>
)

export default Main;
