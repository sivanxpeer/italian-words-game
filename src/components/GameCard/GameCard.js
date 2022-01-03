import React from 'react'
import "./GameCard.css"

const GameCard = () => {
   
    return (
        <div>
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
            </div>
            <button className="btn">Check</button>
        </div>
    )
}

export default GameCard
