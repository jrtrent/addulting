import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import {Container} from "./components/Grid";


const App = () => (
  <div>
    <Navbar />
    <Container fluid>
    <Main />
    </Container>
    

  </div>

  
)
export default App;