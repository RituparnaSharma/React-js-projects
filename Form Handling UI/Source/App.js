import React, { Component } from 'react';
import './App.css';
import Form from './container/Form.js'
import Table from './container/Tabl.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
        list:[]
    };
}
savefun =(username,password,email)=>{
  if (username!==''&& password!=='' && email!==''){
  const newItem={
                username:username,
                password:password,
                email:email };
                
  const list=[...this.state.list];
  list.push(newItem);
  this.setState({
    list

  });
}
else{
  alert('!check all the necessary')
}
  
}
delete=pass=>{
  const list=[...this.state.list]
    const updatedlist=list.filter(item => item.password!==pass);

    this.setState({list:updatedlist});
    console.log(updatedlist)
}
  render(){

    return (
      <div className="App">
        <Form setfun={this.savefun}></Form>
        <Table tableitem={this.state.list}del={this.delete}></Table>
        </div>
        
    );
    
  }
  
}
export default App;
