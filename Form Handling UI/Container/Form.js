import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            Username:'',
            password:'',
            email:''
        }
    }
    username=val=>{
        this.setState({
            Username:val.target.value,
        })
    }
    password=val=>{
        this.setState({
            password:val.target.value,
        })
    }
    email=val=>{
        this.setState({
            email:val.target.value,
        })
    }
    clear=()=>{
        this.setState({
            Username:'',
            password:'',
            email:''
        })
    }
    render(){
        return (
            <div className="Form">
            <div className="container col-lg-5 col-md-5 mt-5  py-2">
               <h1 className=' text-center text-white font-weight-light bg-dark w-100' style={{fontSize:'30px',padding:'20px'}}>Simple Form</h1>
                <br></br>
                <form >
                        <div className='form-group'>
                            <label 
                        
                            className=' w-50 bg-dark text-white'
                            >
                            Username</label>
                            <input type ='text'
                            name='' 
                            id='user' 
                            className='form-control '
                            placeholder='Type Username here....'
                            value={this.state.Username}
                            required
                            onChange={this.username}
                            >
                            </input>
                        </div>
                        <div className='form-group'>
                            <label  className=' w-sm-100 w-50  bg-dark text-white'>Email</label>
                            <input type ='email'
                            name='' 
                            id='email' 
                            className='form-control'
                            placeholder='Type Email here....'
                            value={this.state.email}
                            required
                            onChange={this.email}
                            >
                            </input>
                        </div>
                        <div className='form-group'>
                            <label className=' w-50 bg-dark text-white'>Password</label>
                            <input type ='password'
                            name='' 
                            id='password' 
                            className='form-control'
                            placeholder='Type password here....'
                            value={this.state.password}
                            required
                            onChange={this.password}
                            >
                            </input>
                        </div>
                        <input 
                            type='button' 
                            name='' 
                            value='Submit'
                            className='btn btn-primary  '
                            onClick={()=>{this.props.setfun(this.state.Username,this.state.password,this.state.email);this.clear();}}
                            disabled={!this.state.password.length}
                        >
                        </input>

                </form>

            </div>
            
            </div>
        );
    }
}

export default Form;
