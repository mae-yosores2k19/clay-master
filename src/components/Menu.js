import React, { Component } from "react";
//import {Link} from 'react-router-dom';
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import App from "../styles/App.css";
import AddPatients from "./AddPatients";
import Patients from "./Patients";

import { BrowserRouter as Router,Switch,Link,Route, } from "react-router-dom";

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      // boolean:false,
      
    };
  }
  onClick = () => {
    this.setState({ visible: true });
   
   
    // this.setState({boolean:true})
   
  };
  onHide = () => {
    this.setState({ visible: false });
  };
  
  render() {
  
    // if(this.state.boolean===false){
    return (
      <div >
    
        <div className="content-section implementation ">
          <Menubar id="head" model={this.state.items}>

            <Link to="/"><Button label="Home" /></Link>
            <Link to="/add"><Button label="Add Patient" className="p-button-success" style={{ marginLeft: 4 }} onClick={this.onClick} /></Link> 

            <InputText placeholder="Search" type="text" style={{ marginLeft: 4 }}/>
            <Button label="Search" icon="pi pi-search" className="p-button-secondary" style={{ marginLeft: 1, color: "black" }}
            />
          </Menubar>  
        </div>  
        
        
    
      </div>
    );
    // }else{
    //   return(
    //     <AddPatients/>
    //   )
      
    // }
  }
}
function About() {
//  return <h1>route1</h1>;
  return  <Patients />;
}

function Users() {
//  return <h1>route2</h1>;
  
  return  <AddPatients />;
}
