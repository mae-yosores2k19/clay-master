import React, { Component } from "react";
import App from "../styles/App.css";
//import Flex from "../styles/Flex.scss"
import { InputText } from "primereact/inputtext";
import {Card} from 'primereact/card';

export default class AddPatients extends Component {

  constructor() {
    super();
    this.state = {
      value: null,
     


    };
  }
  toggle() {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    return (
      <div>
        {/* <Card style={{width: '990px',marginLeft:"50px"}}> */}
        <div className="content-section implementation flexgrid-demo">
          <h3 className="profile">Personal Profile</h3>
          <div className="p-grid p-dir-*">
            <div className="p-col-12 p-md-6 p-lg-4 ">
              <span className="p-float-label">
                <InputText id="float-input"  type="text" size="37" value={this.state.value1} onChange={(e) => this.setState({ value2: e.target.value })} />
                <label htmlFor="float-input" >First Name</label>
              </span>
            </div>
            <div className="p-col-12 p-md-6 p-lg-3">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size="37" value={this.state.value3} onChange={(e) => this.setState({ value2: e.target.value })} />
                <label htmlFor="float-input"style={{marginLeft:"50px"}}>Middle Name</label>
              </span>
            </div>
            <div className="p-col-12 p-md-6 p-lg-3">
              <span className="p-float-label">
                <InputText id="float-input"  type="text" size="37" value={this.state.value4} onChange={(e) => this.setState({ value2: e.target.value })} />
                <label htmlFor="float-input" style={{marginLeft:"50px"}}>Last Name</label>
              </span>
            </div>
          </div>
          <br/>
          <div className="p-grid p-dir-*">
            <div className="p-col-12 p-md-6 p-lg-4 ">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size="37" value={this.state.value5} onChange={(e) => this.setState({ value2: e.target.value })} />
                <label htmlFor="float-input" style={{marginLeft:"50px"}}>Age</label>
              </span>
            </div>
            <div className="p-col-12 p-md-6 p-lg-3">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size="37" value={this.state.value6} onChange={(e) => this.setState({ value2: e.target.value })} />
                <label htmlFor="float-input" style={{marginLeft:"50px"}}>Gender</label>
              </span>
            </div>
            <div className="p-col-12 p-md-6 p-lg-3">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size="37" value={this.state.value7} onChange={(e) => this.setState({ value2: e.target.value })} />
                <label htmlFor="float-input" style={{marginLeft:"50px"}}>BirthDate</label>
              </span>
            </div>
          </div>
          <br/>
          <div className="p-grid p-dir-*">
            <div className="p-col-12 p-md-6 p-lg-4 ">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size="37" value={this.state.value5} onChange={(e) => this.setState({ value2: e.target.value })} />
                <label htmlFor="float-input" style={{marginLeft:"50px"}}>Address</label>
              </span>
            </div>
            <div className="p-col-12 p-md-6 p-lg-3">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size="37" value={this.state.value6} onChange={(e) => this.setState({ value2: e.target.value })} />
                <label htmlFor="float-input" style={{marginLeft:"50px"}}>Contact#</label>
              </span>
            </div>
            <div className="p-col-12 p-md-6 p-lg-3">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size="37" value={this.state.value7} onChange={(e) => this.setState({ value2: e.target.value })} />
                <label htmlFor="float-input" style={{marginLeft:"50px"}}>Blank</label>
              </span>
            </div>
          </div>
        </div>
        {/* </Card> */}
      </div>
    );
  }
}
