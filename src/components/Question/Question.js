import React, { useState, useEffect } from 'react'


const Question = ({ qArr, indexOfCurQ, indexLogic, numOfRightQ }) => {

    const shuffleArray = originalArray => {
        const array = [...originalArray]
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    const onUserSelect = (e) => {
        console.log(e.target.id);
        if (e.target.id === "correct-word") {
            numOfRightQ();
        }
        indexLogic();

    }


    const inesrtAnswers = () => {
        const arrOfA = [<div onClick={onUserSelect} key={qArr.english} id='correct-word'>{qArr.english}</div>,
        <div onClick={onUserSelect} key={qArr.wrongWords[0]} id='worng-word'>{qArr.wrongWords[0]}</div>,
        <div onClick={onUserSelect} key={qArr.wrongWords[1]} id='worng-word'>{qArr.wrongWords[1]}</div>,
        <div onClick={onUserSelect} key={qArr.wrongWords[2]} id='worng-word'>{qArr.wrongWords[2]}</div>]
        const suffeledArrOfAnswers = shuffleArray(arrOfA)
        return suffeledArrOfAnswers.map(e => e)

    }
    return (

        <div className="question">
            <h2>{`${indexOfCurQ+1} / 10`}</h2>
            <h2>{qArr.italian}</h2>
            {inesrtAnswers()}
        </div>

    )
}

export default Question
