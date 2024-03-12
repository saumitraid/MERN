import React, { Component } from 'react';

const Student = (props) => {
    return ( 
        <h1>The name of the Student is {props.name} and Email is {props.email}</h1>
    );
}
 
export default Student;