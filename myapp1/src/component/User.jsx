import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
const User = () => {
    const params=useParams();
    const {name}=params;
    const navigate=useNavigate();
    const navToPage=(url)=>{
       navigate(url)
    }
    return (
        <div className='container'>
        <h1>This is {name} page</h1>
        <button className='btn btn-warning mr-3' onClick={()=>navToPage('/student')}>Go Link1 Page</button>
        <button className='btn btn-warning' onClick={()=>navToPage('/filter')}>Go Filter Page</button>
        </div>
    );
}
 
export default User;