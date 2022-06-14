import React, { useEffect, useState } from "react";
import Question from "../Question/Question";
import "./GameList.css";


const GameList = ({
    questionArr,
    category,
    setCategory,
    setDoneCategory,
    setIsPlaying,
    setScores
}) => {

    const [filterdQ, setFilterdQ] = useState(null);
    const [indexOfCurQ, setIndexOfCurQ] = useState(0);
    const [numOfRightQ, setNumOfRightQ] = useState(0);

    useEffect(() => {
        const filterdData = questionArr.filter((qObj) => {
            return qObj.category === category;
        });
        setFilterdQ(filterdData);
    }, [category, questionArr]);


    const increacesNumOfRightQ = () => {
        setNumOfRightQ((prev) => prev + 1);
    };
    
    const indexOfCurQLogic = () => {
        if (indexOfCurQ === 9) {
            setDoneCategory((prev) => [...prev, category]);
            setScores(numOfRightQ);
            setCategory(null);
            setIsPlaying(false);
        } else {
            setIndexOfCurQ((prev) => {
                return prev + 1;
            });
        }
    };
    return (
        <div className="q">
            {filterdQ && (
                <Question
                    qArr={filterdQ[indexOfCurQ]}
                    indexOfCurQ={indexOfCurQ}
                    indexLogic={indexOfCurQLogic}
                    numOfRightQ={increacesNumOfRightQ}
                />
            )}
        </div>
    );
};
export default GameList;