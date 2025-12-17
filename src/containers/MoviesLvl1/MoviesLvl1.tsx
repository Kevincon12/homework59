import React, {useDebugValue, useState} from 'react';

const MoviesLvl1 = () => {
    const [moviesToWatch, setMoviesToWatch] = useState([
        {id: '1', movie: 'Movie 1'},
        {id: '2', movie: 'Movie 2'},
        {id: '3', movie: 'Movie 3'},
    ]);

    const [newMovie, setNewMovie] = useState('');

    const makeNewMovie = () => {
        if(newMovie.trim() === '') return;
        setMoviesToWatch((prev) => [
            ...prev,
            {id: new Date().toISOString(), movie: newMovie},
        ])
    };

    const deleteMovie = (id: string) => {
        setMoviesToWatch((prev) => prev.filter((movie) => movie.id !== id));
    }

    return (
        <div>
            <form className='m-2' onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    className='input-group'
                    placeholder='Enter Movie Name'
                    value={newMovie}
                    onChange={(e) => setNewMovie(e.target.value)}
                />

                <button type='submit' className='btn btn-primary m-2' onClick={makeNewMovie}>Add</button>
            </form>
            <p>Movies to watch:</p>
            {moviesToWatch.map((movie) => (
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <input id={movie.id} value={movie.movie} className='form-control mb-2' style={{ maxWidth: '300px' }}/>
                    <button className='btn-close' onClick={() => deleteMovie(movie.id)}></button>
                </div>
            ))}
        </div>
    );
};

export default MoviesLvl1;