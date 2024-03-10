import React, { Component } from 'react';

class Person extends Component {
    state = {
        count:0
    } 
    hanldeCount(){
        const count=this.state.count;
        return count=== 0 ? 'Zero' : count;
    }
    handleCss=()=>{
        return this.state.count === 0 ? 'text-danger' : 'text-primary';
    }
    handleIncrement=()=>{
        const c=this.state.count;
        this.setState({count:c+1})
    }
    render() { 
        return (
            <React.Fragment>
            <h1 className={this.handleCss()}>{this.hanldeCount()}</h1>
            <button className='btn btn-primary' onClick={this.handleIncrement}>Click Here</button>
            </React.Fragment>
        );
    }
}
 
export default Person;