import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { tempData, subData } from "./Utils";



const columns = [
      {
        expander: true,
        Header: () => <strong>More</strong>,
        width: 65,
        Expander: ({ isExpanded, ...rest }) =>
          <div>
            {isExpanded
              ?  <span className="glyphicon glyphicon-minus"></span>
              :  <span className="glyphicon glyphicon-plus"></span>}
          </div>,
        style: {
          cursor: "pointer",
          fontSize: 25,
          padding: "0",
          textAlign: "center",
          userSelect: "none"
        }
      }
   ,

      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      }
,
  {
        Header: "Age",
        accessor: "age"
  }
];

export default class TempGrid extends Component{
  constructor() {
    super();
    this.state = {
      data: tempData
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="container">
        <div className="row">
        <h2>Quote Grid</h2>
        {/* <button className="btn btn-primary">Qutote Screen</button> */}
        </div>
        </div>   
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          showPagination={false}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
              
                <ReactTable
                  data={data}
                  columns={columns}
                  defaultPageSize={3}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}>
                        Another Sub Component!
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}