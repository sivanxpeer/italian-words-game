import React, { useEffect, useState } from "react";
import "./GameCard.css";
import api from "../../Api";
import GameList from "../GameList/GameList";
import Header from "../Header/Header";
const categories = ["Basics", "Family", "kitchen", "Emotions"];

const GameCard = ({ scores, setScores, myUser }) => {
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
                <h1 className="end-round-title"> {`Round finished with the score of ${scores}/10`}</h1>
                <button className="btn" onClick={() => setIsPlaying(true)}>Play Again</button>
            </div>
        );
    };

    const insertCategoryButtons = () => {
        return categories.map((category) => {
            const isDone = doneCategory.includes(category.toLocaleLowerCase());
            console.log(doneCategory);
            console.log(category);
            return (
                <div key={category}
                    onClick={(e) => { !isDone && setCategory(e.target.textContent.toLowerCase()); }}
                    className={`category btn ${isDone && 'not-active-button'}`}>
                    {category}
                </div>
            );
        });
    };

    return (
        <div>
            {myUser ? <>
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
                    <div>
                        <div className="select-category">
                            <h3>
                                Select a Category
                            </h3>
                        </div>
                        <div className="categories">
                            {insertCategoryButtons()}
                        </div>
                    </div>
                )}
                {!isPlaying && gameEnd()}
            </>
                :
                <>
                    <Header></Header>
                </>
            }
        </div>
    );
};
export default GameCard;