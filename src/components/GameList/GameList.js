import React from 'react'
// import {data} from ''

const GameList = ({ data }) => {
    const randomNumber = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

    const randomize = (index) => {
        let arr = [index];
        while (arr.length < 4) {
            let rand1 = randomNumber(0, data.length);
            while (arr.includes(rand1)) {
                rand1 = randomNumber(0, data.length);
            }
            arr.push(rand1);
        }
        return arr;
    }

    const question = (word) => {
        return (<div>{`choose the correct word in Englis:${word}`}</div>)
    }

    return (
        <div>
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
        </div>
    )
}

export default GameList
