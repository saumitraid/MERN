import React, { Component } from 'react';

class MyComponent extends Component {
    state = { 
        name:'Euphoria'
    } 
    render() { 
        return (
            <div className='container'>
            <h1>{this.state.name}</h1>
            <button className='btn btn-primary' onClick={this.updateData}>Click Me</button>
        </div>
        );
    }
    updateData=()=>{
        this.setState({name:'Genx'})
    }
}
 
export default MyComponent;