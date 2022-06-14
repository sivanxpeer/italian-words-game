import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Header.css'

const Header = ({ myUser  }) => {
    const [btn, setbtn] = useState(false);
    const history = useHistory();
    const controlDisp = true;

    const start = () => {
        console.log("start");
        if (!myUser && !btn) {
            setbtn(true);
            disp();
        }
        else if (myUser) {
            setbtn(false);
        }
    }

    const disp = () => {
        history.push('/gamecard')
        if (btn){
            return (<div><h3>Please log in</h3></div>)
        }
    }
    
    return (
        <div className="header">
            <span className="title">BiLinguale <span className="glob">🌏</span></span>
            <button className="btn start" onClick={start}><h3> Start!</h3></button>
            <div>
                {controlDisp&&disp()}
            </div>
        </div>
    )
}

export default Header
