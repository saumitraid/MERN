import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Person from './component/Person';
import Employee from './component/Employee';
import Student from './component/Student';
import Movies from './component/Movies';
import Nav from './component/Nav';
import User from './component/User';
import Filter from './component/filter';
import Four04 from './component/Four04';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/emp' element={<Employee/>}/>
          <Route path='/user/:name' element={<User/>}/>
          <Route path='/filter' element={<Filter/>}/>
          <Route path='/*' element={<Four04/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
