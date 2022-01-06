import React, { useEffect, useState } from 'react'
import "./GameCard.css"
import api from '../../Api'
import GameList from '../GameList/GameList';

const GameCard = ({ scores, setScores }) => {
    const [data, setData] = useState();
    const [category, setCategory] = useState(null);//return to null as initial
    const [doneCategory, setDoneCategory] = useState([])
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        let it = [];
        const fetchData = async () => {
            const dataObj = await api.getItems();
            setData(dataObj);
        };

        fetchData();
    }, []);
    const gameEnd = () => {
        return <><h1> {`Woow you finished in the score of ${scores + 1}/10`}</h1>
            <button>Play Again</button></>
    }

    // game list get the props ↓
    // qArr, category,  setDoneCategory 

    //1. create button for each category of Q + nice title + CSS 
    return (
        <div className="header" >
            {isPlaying && category && data && <GameList
                questionArr={data}
                category={category}
                setDoneCategory={setDoneCategory}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setScores={setScores}
            />}

            {isPlaying && !category && <div className="categories">
                <div onClick={(e) => setCategory(e.target.textContent.toLowerCase())} className="category btn">Basics</div>
                <div onClick={(e) => setCategory(e.target.textContent.toLowerCase())} className="category btn">Family</div>
                <div onClick={(e) => setCategory(e.target.textContent.toLowerCase())} className="category btn">kitchen</div>
                <div onClick={(e) => setCategory(e.target.textContent.toLowerCase())} className="category btn">Emotions</div>
            </div>}
            {!isPlaying && gameEnd()}
        </div>
    )
}

export default GameCard
