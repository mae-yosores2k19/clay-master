import React from "react";
import "./styles/App.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Menu from "./components/Menu";
import Patients from "./components/Patients";
import AddPatients from "./components/AddPatients";
import { BrowserRouter as Router,Switch,Link,Route, } from "react-router-dom";






export default function App() {
  return (

      <Router>
        <div className="App">
          <Menu/>
          <Route exact path="/" component={Patients}/>
          <Route path="/add" component={AddPatients}/>
        </div>
      </Router>  
  
  );
}

