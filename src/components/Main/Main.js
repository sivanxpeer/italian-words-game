import React from 'react';
// import axios from 'axios';
import WordsData from '../WordsData';
const Main = () => {


    return (
        <div>
            {"Main:"}
            <br></br>
            <WordsData></WordsData>
            {"this component will be the main page of the game - users dash board , choose a category to learn, hold state and data on user"}

        </div>
    )

}
export default Main;
