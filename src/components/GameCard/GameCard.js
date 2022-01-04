import React from 'react'
import "./GameCard.css"

const GameCard = (props) => {
   
    return (
        <div>
            <div className="question" q={props.question}></div>
            <div className="it-words"></div>
            <div className="answers">
               <div>
                   <input type="radio" name="answer"/><label>1</label>
                </div> 
               <div>
                   <input type="radio" name="answer"/><label>1</label>
                </div> 
               <div>
                   <input type="radio" name="answer"/><label>1</label>
                </div> 
               <div>
                   <input type="radio" name="answer"/><label>1</label>
                </div> 
            <button className="btn">Check</button>
            </div>
        </div>
    )
}

export default GameCard
