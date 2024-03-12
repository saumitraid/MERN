import React, { useState } from 'react';
import { getMovies } from '../Service/fakeMovieService';

const Movies = () => {
    const [allMovie, setMovie]=useState(getMovies);
    return (
        <div className='container'>
            <h1>All Movies</h1>
            <p>Total no. of movies {allMovie.length}</p>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Genre</td>
                        <td>Stock</td>
                        <td>Rate</td>
                    </tr>
                </thead>
                <tbody>
                    {allMovie.map((m)=><tr key={m._id}>
                        <td>{m.title}</td>
                        <td>{m.genre.name}</td>
                        <td>{m.numberInStock}</td>
                        <td>{m.dailyRentalRate}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}
 
export default Movies;