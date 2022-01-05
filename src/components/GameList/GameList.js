import React from 'react'
// import GameCard from '../GameCard/GameCard'
// import {data} from 'GameCard'
// import { data } from '../GameCard/GameCard';

//this components get the data and creates a question 
//then send it via props to the gameCard component


const GameList = ({ data }) => {
    // const [question1,setQuestion] = data;
    // const randomNumber = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

    // const randomize = (index) => {
    //     let arr = [index];
    //     while (arr.length < 4) {
    //         let rand1 = randomNumber(0, data.length);
    //         while (arr.includes(rand1)) {
    //             rand1 = randomNumber(0, data.length);
    //         }
    //         arr.push(rand1);
    //     }
    //     return arr;
    // }

    const question = () => {
        return <div>{`choose the correct word in Englis: Ciao`}</div>
    }

    // function question() {
    //     return italianWords.map((word) => { return (<span key={word}>{word}</span>) })
    // }

    return (
        <div>
            {/* <GameCard></GameCard> */}
            <div question={question}></div>
                {/* {data && question()} */}
                {
                    // data[i ]
                    // data.forEach((i) => {

                    //     const words = []
                    //     words = data.randomize(i)
                    // })
                }
                {/* {data.map((q, i) => { */}
                {/* //         const =randomize(i) */}

                {/* //make index array===>>words */}
                {/* //throw the card  */}
                {/* // })} */}
            {/* </div> */}
        </div>
    )
}

export default GameList
