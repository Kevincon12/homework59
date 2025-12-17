import React from 'react';

interface Props {
    id: string;
    title: string;
    deleteMovie: (id: string) => void;
    updateMovie: (id: string, newTitle: string) => void;
}

const MovieItem: React.FC<Props> = React.memo(({ id, title, deleteMovie, updateMovie }) => {
        return (
            <div className='d-flex justify-content-center align-items-center mb-3'>
                <input
                    id={id}
                    value={title}
                    className='form-control mb-2'
                    style={{ maxWidth: '300px' }}
                    onChange={(e) => updateMovie(id, e.target.value)}
                />
                <button
                    type="button"
                    className="btn-close"
                    onClick={() => deleteMovie(id)}
                ></button>
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.title === nextProps.title
);

export default MovieItem;
