import { useSearchParams } from "react-router-dom";

const Filter = () => {
    const [searchParams, setSearchParams]=useSearchParams();
    console.log(searchParams.get('name'));
    console.log(searchParams.get('email'));
    return (
        <div className="container">
        <h1>Filter Page</h1>
        <button className="btn btn-primary"
        onClick={()=>setSearchParams({name:'Rohit'})}>Set Params Value</button>
        <input type="text" placeholder="Set text in query"
        onChange={(e)=>setSearchParams({text:e.target.value})}
        />
        </div>
    );
}
 
export default Filter;