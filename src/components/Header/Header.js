import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Header.css'

const Header = ({ myUser }) => {
    const [btn, setbtn] = useState(false);
    const history = useHistory();

    // useEffect(() => {

    // }, [btn])

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
        if (btn)
            return (<div><h3>Please log in</h3></div>)
    }

    return (
        <div className="header">
            {history.push('/gamecard')}
            <span className="title">BiLinguale <span className="glob">🌏</span></span>
            <div className="img-container"></div>
            <button className="btn start" onClick={start}><h3> Start!</h3></button>
            <div>
                {disp()}
            </div>
        </div>
    )
}

export default Header
