import React, { Component } from 'react';
import './Table.css' 
import { CSVLink } from "react-csv";

class Tabl extends Component {
    render(){
    return (
    <div className="Tabl">
         
        <div className='container mt-5'>
            <div>
                <CSVLink
                    data={this.props.tableitem}
                    filename={"admin-file.csv"}
                    className="btn btn-info float-right my-1"
                    target="_blank"
                    style={{ textdecoration: 'none'}}
                >
                Export-File
                </CSVLink>
            </div>
        
            <table className='table table-hover table-bordered table-responsive-sm overflow-auto'>
                <thead className='thead-light '>
                    <tr className='text-center' >
                        <th >
                            Username
                        </th> 
                        <th >
                            Email
                        </th> 
                        <th >
                            Password
                        </th> 

                    </tr>
                    
                </thead>
                <tbody >
                    {this.props.tableitem.map(item=>
                        <tr className='text-center' key={item.email}>
                            <td >{item.username}  </td>
                            <td >{item.email}  </td>
                            <td >{item.password}  </td>
                            <td><input 
                            type='button' 
                            value='Delete'
                            className='btn btn-danger'
                            onClick={()=>this.props.del(item.password)}
                            >
                            </input></td>
                            
                        </tr>
                        
                    )}
                        
                </tbody>
            </table>

        </div>
      
    </div>
  );
}
}

export default Tabl;
