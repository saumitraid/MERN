import React from 'react';

const Employee = () => {
    const [data, setData]=React.useState(null);
    const [print, setPrint]=React.useState(false);

    const getData=(val)=>{
        setData(val.target.value)
        //console.log(val.target.value);
    }
    return (
        <div className='col-6'>
            <div className='form-group'>
                Enter your name
                <input type='text' onChange={getData} className='form-control'/>

                <button type='button' className='btn btn-primary' onClick={()=>setPrint(true)}>Click</button>
                
                {print ? <h1>{data}</h1> : '' }
            </div>
        </div>
    );
}
 
export default Employee;