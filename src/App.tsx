import { useState } from 'react'
import './App.css'
import MoviesLvl1 from "./containers/MoviesLvl1/MoviesLvl1.tsx";
import JokesLvl2 from "./containers/JokesLvl2/JokesLvl2.tsx";

const App = () => {

  return (
    <>
        <MoviesLvl1/>
        <hr/>
        <JokesLvl2/>
    </>
  )
};

export default App
