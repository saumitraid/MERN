import React, { Component, useState } from 'react';

const Counter = () => {
    const [data, setData]=useState('Euphoria');

    const updateData=()=>{
        setData('GenX');
    }
    return (
        <div className='container'>
            <h1>{data}</h1>
            <button className='btn btn-primary' onClick={updateData}>Click Me</button>
        </div>
    );
}
 
export default Counter;