import React, { useEffect, useState } from 'react'
import "./GameCard.css"
import api from '../../Api'
import GameList from '../GameList/GameList';

const GameCard = ({ question }) => {
    const [data, setData] = useState();
    const [italianWords, setItalianWords] = useState();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        let it = [];
        const fetchData = async () => {
            const dataObj = await api.getItems();
            setData(dataObj);

            console.log(dataObj);
            dataObj.forEach((item) => {
                it.push(item.italian)

            })
            setItalianWords(it);
            console.log("it", it);

        };

        fetchData();
    }, []);

    function displayWords() {
        return italianWords.map((word) => { return (<span key={word}>{word}</span>) })
    }

    const handleClick = () => {
        // setFlag(true);
        setFlag(prevState => !prevState);
    }
    return (
        <div className="header" data={data}>
            <GameList></GameList>
            <button className="btn get-words" onClick={handleClick}>get italian words</button>
            <div>
                {flag && displayWords()}

            </div>
            <div className="card">
                <div className="question"></div>
                <div className="en-words"></div>
                <div className="answers">
                    <div>
                        <input type="radio" name="answer" /><label>1</label>
                    </div>
                    <div>
                        <input type="radio" name="answer" /><label>1</label>
                    </div>
                    <div>
                        <input type="radio" name="answer" /><label>1</label>
                    </div>
                    <div>
                        <input type="radio" name="answer" /><label>1</label>
                    </div>
                    <button className="btn">Check</button>
                </div>
            </div>
        </div>
    )
}

export default GameCard
