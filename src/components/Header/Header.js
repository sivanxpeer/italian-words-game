import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
// import GameCard from '../GameCard/GameCard';
import './Header.css'
const Header = ({ myUser }) => {
    const [btn, setbtn] = useState("false");
    const history = useHistory();

    const start = () => {
        console.log("start");
        if (!myUser && !btn) {
            history.push('/gamecard');
            
            disp();
            setbtn(prevState => !prevState);
            // setbtn(false);
        }
        else {
            setbtn(prevState => !prevState);
            // return (<GameCard></GameCard>)
        }
    }



    const disp = () => {
        return (<div><h3>Please log in</h3></div>)
    }

    useEffect(() => {

    })
    return (
        <div className="header">
            <span className="title">BiLinguale <span className="glob">🌏</span></span>
            <div className="img-container">
            </div>
            <button className="btn start" onClick={start}><h3> Start!</h3>
            </button>
            <div>
                {(!myUser && !btn) && disp()}
            </div>
        </div>
    )
}

export default Header
