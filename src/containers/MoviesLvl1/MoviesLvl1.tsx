import React, {useDebugValue, useState} from 'react';
import MovieItem from "../MovieItem/MovieItem.tsx";

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

    const updateMovie = (id: string, newTitle: string) => {
        setMoviesToWatch(prev =>
            prev.map(movie =>
                movie.id === id ? { ...movie, movie: newTitle } : movie
            )
        );
    };

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
                <MovieItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.movie}
                    deleteMovie={deleteMovie}
                    updateMovie={updateMovie}
                />
            ))}
        </div>
    );
};

export default MoviesLvl1;

