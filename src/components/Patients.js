import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Card} from 'primereact/card';


// import {CarService} from '../service';

export default class Patients extends Component {

    constructor() {
        super();
        this.state = {
            patients: [
                {
                    "id": 1,
                    "name": "fdfk",
                    "age":3,
                    "date":"03-17-2000"
                },
                {
                    "id": 1,
                    "name": "fdfk",
                    "age":3,
                    "date":"03-17-2000"
                }
            ]
        };
        // this.carservice = new CarService();
    }

    render() {
        
        return (
            <div >
                <div className="content-section implementation">
                    <h3>Current Patients</h3>
                    <DataTable id = "table"value={this.state.patients}>
                        <Column field="id" header="Patients ID" />
                        <Column field="name" header="Name" />
                        <Column field="age" header="Age" />
                        <Column field="date" header="Date" />
                    </DataTable>
                    


                </div>
   
            </div>
        );
        
    }
}
