import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Teacher } from './Teacher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const person={
  name:'Euphoria',
  // walk:function(){
  //   console.log('Can walk')
  // },
  talk(){
    console.log(this);
  }
}

// console.log(person.name);
// person.talk();
const talk=person.talk.bind(person)
// person.walk();
console.log(talk);

// const square=function(n){
//   return n*n;
// }
// console.log(square(5));

const square=n=>n*n;
console.log(square(6));

const jobs=[
  {id:1, name:'Apurba', isActive:true},
  {id:2, name:'Braja', isActive:true},
  {id:3, name:'Aritra', isActive:true},
  {id:4, name:'Debjit', isActive:false},
]; 

// const activeJobs=jobs.filter((job)=>job.isActive==true);
const activeJobs=jobs.filter(function(job){ return job.isActive==false});

console.log(activeJobs);
const colors=['red','green','blue'];
// for(let i=0; i<colors.length; i++){
//   console.log(colors[i]);
// }
const item=colors.map(col => `the color is ${col} jdskkds`)
console.log(item);

const address={
  street:'32 MG Road',
  locality: 'North Kolkata',
  PIN: '700020'
}

// const street=address.street;
// const locality=address.locality;
// const PIN=address.PIN;

const {street:st, locality:lt, PIN}=address;
console.log(st);
console.log(lt);

const col2=['yellow', 'black'];
const mcolor=[...colors,'Pink','Maroon', ...col2];
console.log(mcolor);





let t;
t=new Teacher('Rohan', 'Btech in CSE');
t.walk();
t.tech();
console.log('Name of teacher :-'+t.name);
console.log('Degree :-'+t.degree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
