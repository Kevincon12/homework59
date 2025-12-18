import React, {useEffect, useState} from 'react';

const JokesLvl2 = () => {
    const [jokeString, setJokeString]= useState('');
    const URL: string = 'https://api.chucknorris.io/jokes/random';

    const makeJoke = async () => {
        const response = await fetch(URL);
        const data = await response.json();

        const joke = data.value;

        setJokeString(joke);
    }

    useEffect(() => {
        makeJoke();
    }, []);

    return (
        <div>
            <p>If you wanna laugh click the button</p>
            <button className='btn btn-primary' onClick={makeJoke}>Get joke</button>

            <div className='text-center'>{jokeString}</div>
        </div>
    );
};

export default JokesLvl2;