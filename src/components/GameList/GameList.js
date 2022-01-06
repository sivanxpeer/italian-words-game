import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import './GameList.css';

// import italianApi from '../../apis/italianApi'
//this components get the data and creates a question 
//then send it via props to the gameCard component


const GameList = ({ questionArr, category, setDoneCategory,setIsPlaying,setScores }) => {
    const [filterdQ, setFilterdQ] = useState(null)
    const [indexOfCurQ, setIndexOfCurQ] = useState(0)
    const [numOfRightQ, setNumOfRightQ] = useState(0)
  

    useEffect(() => {
        const filterdData = questionArr.filter(qObj => {
            return qObj.category === category
        })
        setFilterdQ(filterdData)
        // console.log(filterdData)
    }, [category, questionArr])

    const increacesNumOfRightQ = () => {
        setNumOfRightQ(prev => prev + 1)
    }
    const indexOfCurQLogic = () => {
        if(indexOfCurQ===9){
            setScores(numOfRightQ)
            setDoneCategory(category)
            setIsPlaying(false)
            
        }else{
            setIndexOfCurQ(prev => {return prev + 1})
        }
    }

    return (
        <div className="q">
            {filterdQ&&<Question 
                qArr={filterdQ[indexOfCurQ]}
                indexOfCurQ={indexOfCurQ}
                indexLogic={indexOfCurQLogic} 
                numOfRightQ={increacesNumOfRightQ}/>}
        </div>
    )
}

export default GameList
