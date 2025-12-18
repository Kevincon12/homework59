import React, {useEffect, useState} from 'react';

const JokesLvl2 = () => {
    const [jokeString, setJokeString]= useState('');
    const URL: string = 'https://api.chucknorris.io/jokes/random';

    const makeJoke = async () => {
        const response = await fetch(URL);
        const data = await response.json();

        const joke = data.value;
        console.log(joke);
    }

    useEffect(() => {
        makeJoke();
    }, []);

    return (
        <div>
            <p>If you wanna laugh click the button</p>
            <button className='btn btn-primary'>Get joke</button>
        </div>
    );
};

export default JokesLvl2;