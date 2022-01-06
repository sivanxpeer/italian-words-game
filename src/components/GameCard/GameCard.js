import React, { useEffect, useState } from "react";
import "./GameCard.css";
import api from "../../Api";
import GameList from "../GameList/GameList";
const cat = ["Basics", "Family", "kitchen", "Emotions"];
const GameCard = ({ scores, setScores }) => {
    const [data, setData] = useState();
    const [category, setCategory] = useState(null); //return to null as initial
    const [doneCategory, setDoneCategory] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true);
    useEffect(() => {
        let it = [];
        const fetchData = async () => {
            console.log(it);
            const dataObj = await api.getItems();
            setData(dataObj);
        };
        fetchData();
    }, []);
    const gameEnd = () => {
        return (
            <div className="end-round">
                <h1 className="end-round-title"> {`Wooohooo round finished with the score of ${scores + 1}/10`}</h1>
                <button className="btn"onClick={() => setIsPlaying(true)}>Play Again</button>
            </div>
        );
    };
    const insertCatButtons = () => {
        return cat.map((c) => {
            const isDone = doneCategory.includes(c.toLocaleLowerCase());
            console.log(doneCategory);
            console.log(c);
            return (
                <div key={c}
                    onClick={(e) => {
                        !isDone && setCategory(e.target.textContent.toLowerCase());
                    }}
                    className={`category btn ${isDone&&'not-active-button'}`}
                >
                    {c}
                </div>
            );
        });
    };
    // game list get the props ↓
    // qArr, category,  setDoneCategory
    //1. create button for each category of Q + nice title + CSS
    return (
        <div>
            {isPlaying && category && data && (
                <GameList className={"game-list"}
                    questionArr={data}
                    category={category}
                    setDoneCategory={setDoneCategory}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    setScores={setScores}
                    setCategory={setCategory}
                />
            )}
            {isPlaying && !category && (
                <div className="categories">{insertCatButtons()}</div>
            )}
            {!isPlaying && gameEnd()}
        </div>
    );
};
export default GameCard;